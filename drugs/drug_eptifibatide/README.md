<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;eptifibatide&quot;}]"></div>

# eptifibatide

- **generic name:** eptifibatide
- **ATC codes:** `B01AC16`
- **DrugBank:** [DB00063](https://go.drugbank.com/drugs/DB00063) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Eptifibatide is a platelet aggregation inhibitor used to treat conditions such as acute coronary syndromes, including unstable angina and myocardial infarction. It is an approved medicine, authorised in the European Union, and is typically given in hospital settings for acute cardiac care.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2295855](https://www.wikidata.org/wiki/Q2295855) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| eptifibatide | parent | 831.965 | C35H49N11O9S2 | PubChem | [448812](https://pubchem.ncbi.nlm.nih.gov/compound/448812) | Liu_2020, Wang_2015 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 15:54 | 3:07 | 0/1/1 | 0/0/0 | 0/0/0 | 40,029/7,463 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.2). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Liu_2020_reference](drugs/drug_eptifibatide/Eptifibatide_Liu2020_reference.md) | — | 1-compartment (no model) | 3 | Liu L et al., Clinical Evaluation of the Tolerability…, Clinical pharmacology in dr… (2020) | [10.1002/cpdd.717](https://doi.org/10.1002/cpdd.717) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Wang_2015_reference](drugs/drug_eptifibatide/Eptifibatide_Wang2015_reference.md) | — | 2-compartment (no model) | 3 | Wang XP et al., Population pharmacokinetics and safety…, International journal of cl… (2015) | [10.5414/CP202196](https://doi.org/10.5414/CP202196) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=eptifibatide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CACNA2D1 (target), ITGA2B (modulator), ITGB3 (modulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 17 matched, 17 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Liu_2020.pdf` | Liu L et al., Clinical Evaluation of the Tolerability…, Clinical pharmacology in dr… (2020) | popPK | 10 | [10.1002/cpdd.717](https://doi.org/10.1002/cpdd.717) | [31197974](https://pubmed.ncbi.nlm.nih.gov/31197974) | The study reports quantitative PK parameters for eptifibatide in humans, including a 3-compartment model, clearance (0.11 L/min), and half-life (148.19 minutes). |
| `Wang_2015.pdf` | Wang XP et al., Population pharmacokinetics and safety…, International journal of cl… (2015) | popPK | 10 | [10.5414/CP202196](https://doi.org/10.5414/CP202196) | [26104033](https://pubmed.ncbi.nlm.nih.gov/26104033) | The paper reports a population PK model for eptifibatide with explicit numeric values for CL, V1, Q, and V2 in the abstract. |
| `Cox_2004.pdf` | Cox DS et al., Pharmacokinetics and pharmacodynamics o…, Journal of clinical pharmac… (2004) | pd | 5 | [10.1177/0091270004267651](https://doi.org/10.1177/0091270004267651) | [15317826](https://www.ncbi.nlm.nih.gov/pubmed/15317826) | metadata signals extractable PD data (PK-PD) |

<sub>queue written 2026-10-05T15:51:45.981855+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bourdon_2006 | irrelevant | 0 | 0 | The study is a mechanistic investigation of P2Y1 receptor desensitization in platelets, and eptifibatide is used only as a comparator agent, with no pharmacokinetic parameters reported. |
| PD | Bourdon_2006 | not_relevant | 0 | 0 | The paper focuses on the pharmacology of MRS2365 (a P2Y1 agonist) and only mentions eptifibatide qualitatively as a control for shape change, without reporting any exposure-response or dose-response data for eptifibatide. |
| popPK | Cox_2004 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for argatroban, while eptifibatide is only a co-administered comparator agent. |
| popPK | Fatma_2020 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of eptifibatide as an antiviral agent, reporting no pharmacokinetic parameters. |
| PGx | Gao_2009 | not_relevant | 0 | 0 | The paper investigates the mechanism of eptifibatide-induced thrombocytopenia involving Fc receptors and integrin signaling, not the effect of a gene variant on the drug's pharmacokinetics or standard pharmacodynamics. |
| popPK | Gilchrist_2003 | irrelevant | 2 | 0 | The text is a narrative review describing the mechanism and history of eptifibatide dosing without providing specific quantitative pharmacokinetic parameter values (CL, V, etc.). |
| PD | Gilchrist_2003 | not_relevant | 2 | 0 | The text is a qualitative review of eptifibatide's mechanism and clinical development history, mentioning PK modeling and dose optimization but providing no numeric PD parameters, concentration-effect curves, or specific exposure-response data. |
| popPK | Hantgan_2002 | irrelevant | 0 | 0 | The study is a biophysical/mechanistic analysis of tirofiban's effect on GpIIb/IIIa structure, with eptifibatide mentioned only as a comparator, and no pharmacokinetic parameters are reported. |
| popPK | Marciniak_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of platelet inhibition and receptor binding, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Meisel_2004 | not_relevant | 2 | 0 | The text is a review abstract discussing the general role of platelet glycoprotein polymorphisms in cardiovascular disease and drug response, but it does not report specific quantitative pharmacokinetic or pharmacodynamic effects of a genotype on eptifibatide. |
| PGx | Nordeen_2013 | not_relevant | 0 | 0 | The paper focuses on clopidogrel resistance and CYP2C19 genotyping, not eptifibatide pharmacogenomics. |
| PGx | Schrör_2003 | not_relevant | 0 | 0 | The paper explicitly states there is no clear evidence that the biological activity of the agents is modified by gene polymorphism (HPA-1). |
| popPK | Stephens_1998 | irrelevant | 0 | 0 | The paper is a mechanistic study on platelet aggregation signaling and does not report pharmacokinetic parameters for eptifibatide. |
| PD | Stephens_1998 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of a synthetic peptide (Ppep) mimicking GpIIb, not the drug eptifibatide. |
| PGx | Toljan_2019 | not_relevant | 0 | 0 | The paper focuses on clopidogrel pharmacogenetics and a case of thrombosis; eptifibatide is only mentioned as a rescue therapy without any analysis of its PK/PD parameters or genetic influence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-05 15:51 UTC</sub>
