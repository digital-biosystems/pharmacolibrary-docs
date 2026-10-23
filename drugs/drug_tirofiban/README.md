<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;tirofiban&quot;}]"></div>

# tirofiban

- **generic name:** tirofiban
- **ATC codes:** `B01AC17`
- **DrugBank:** [DB00775](https://go.drugbank.com/drugs/DB00775) · **PubChem:** [CID 60947](https://pubchem.ncbi.nlm.nih.gov/compound/60947)
- **molar mass:** 440.597 g/mol (C22H36N2O5S) — DrugBank
- **groups:** approved, investigational

## About

Tirofiban is a platelet aggregation inhibitor used to treat heart conditions such as myocardial infarction, unstable angina, and coronary artery disease. It is an approved medicine, given by infusion, and is generally restricted to hospital settings for acute cardiac care.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q415366](https://www.wikidata.org/wiki/Q415366) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| tirofiban | parent | 440.597 | C22H36N2O5S | DrugBank | [60947](https://pubchem.ncbi.nlm.nih.gov/compound/60947) | Emani_2020 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Emani_2020_reference](drugs/drug_tirofiban/Tirofiban_Emani2020_reference.md) | — | 1-compartment (no model) | 2 | Emani S et al., Platelet Inhibition With IV Glycoprotei…, Pediatric critical care med… (2020) | [10.1097/PCC.0000000000002292](https://doi.org/10.1097/PCC.0000000000002292) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=tirofiban).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ITGA2B (target), ITGB3 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 16:54 | 2:10 | 0/1/0 | 0/0/0 | 0/0/0 | 29,823/4,857 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 1/3 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 14 matched, 14 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Emani_2020.pdf` | Emani S et al., Platelet Inhibition With IV Glycoprotei…, Pediatric critical care med… (2020) | popPK | 9 | [10.1097/PCC.0000000000002292](https://doi.org/10.1097/PCC.0000000000002292) | [32168298](https://pubmed.ncbi.nlm.nih.gov/32168298) | The study reports quantitative PK parameters (half-life, steady-state concentration) and identifies covariates for clearance in a one-compartment model for tirofiban in humans. |
| `Moriguchi_2005.pdf` | Moriguchi A et al., FK419, a novel nonpeptide GPIIb/IIIa an…, Journal of cerebral blood f… (2005) | pd | 4 | [10.1038/sj.jcbfm.9600009](https://doi.org/10.1038/sj.jcbfm.9600009) | [15678114](https://www.ncbi.nlm.nih.gov/pubmed/15678114) | metadata signals extractable PD data (IC50) |
| `Zhou_2020.pdf` | Zhou MC et al., Subacute stent thrombosis in a patient…, International journal of cl… (2020) | pgx | 5 | [10.5414/CP203547](https://doi.org/10.5414/CP203547) | [32352367](https://www.ncbi.nlm.nih.gov/pubmed/32352367) | metadata signals extractable PGX data (CYP2C19*2) |
| `Zhou_2024.pdf` | Zhou Y et al., Use of Tirofiban to Prevent Ischemic Ev…, Translational stroke resear… (2024) | pgx | 5 | [10.1007/s12975-023-01171-3](https://doi.org/10.1007/s12975-023-01171-3) | [37523134](https://www.ncbi.nlm.nih.gov/pubmed/37523134) | metadata signals extractable PGX data (CYP2C19) |

<sub>queue written 2026-10-05T16:52:07.757461+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ding_2017 | not_relevant | 0 | 0 | The paper reports a pharmacogenomic effect of CYP2C19 on clopidogrel, not tirofiban. |
| popPK | Hantgan_2002 | irrelevant | 0 | 0 | The study is a biophysical/mechanistic investigation of tirofiban's interaction with GpIIb/IIIa receptors and does not report pharmacokinetic parameters. |
| popPK | Marciniak_2001 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic assessment of platelet inhibition (IC50) and receptor binding, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Meisel_2004 | not_relevant | 2 | 0 | The text is a review abstract discussing platelet glycoprotein polymorphisms and drug response in general, but it does not report specific quantitative pharmacokinetic or pharmacodynamic effects of a genotype on tirofiban. |
| PGx | Meyer_2023 | not_relevant | 0 | 0 | The paper is a systematic review of clinical outcomes (complications) for DAPT regimens and does not report pharmacokinetic or pharmacodynamic parameters or specific pharmacogenomic effects for tirofiban. |
| popPK | Moriguchi_2005 | irrelevant | 0 | 0 | The study is a pharmacodynamic/efficacy comparison in guinea pigs and does not report pharmacokinetic parameters (CL, V, etc.) for tirofiban. |
| PGx | Nordeen_2013 | not_relevant | 0 | 0 | The paper focuses on clopidogrel resistance and CYP2C19 genotyping; tirofiban is only listed as a commercial product and is not the subject of any pharmacogenomic analysis. |
| PGx | Schrör_2003 | not_relevant | 0 | 0 | The paper explicitly states there is no clear evidence that the biological activity of the agents is modified by gene polymorphism (HPA-1). |
| popPK | Talreja_2004 | irrelevant | 0 | 0 | The study is an in-vitro platelet aggregometry experiment examining the pharmacodynamic interaction between clopidogrel and tirofiban, not a pharmacokinetic study reporting disposition parameters for tirofiban. |
| PGx | Wang_2021 | not_relevant | 0 | 0 | The paper is a case report of stent thrombosis where tirofiban was used as a rescue therapy, but it does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of tirofiban itself. |
| PGx | Zhang_2021 | not_relevant | 0 | 0 | The paper is a case report of in-stent thrombosis where CYP2C19 status is mentioned in the context of switching to ticagrelor, but it does not report any pharmacokinetic or pharmacodynamic parameters for tirofiban. |
| PGx | Zhou_2020 | not_relevant | 0 | 0 | The paper reports a pharmacogenomic effect of CYP2C19 on clopidogrel, not tirofiban. |
| PGx | Zhou_2024 | not_relevant | 2 | 5 | The study reports a clinical outcome (ischemic events) and platelet function (PD) for clopidogrel, but does not report pharmacokinetic or pharmacodynamic parameters of tirofiban itself. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-05 16:52 UTC</sub>
