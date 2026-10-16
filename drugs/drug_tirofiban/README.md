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

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 18:25 | 0:24 | 0/1/0 | 0/0/0 | 0/0/0 | 24,713/1,624 | einfracz / qwen3.8-27b | 4 | 1/3 | 4/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.857), gpt-oss:120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Emani_2020_reference](drugs/drug_tirofiban/Tirofiban_Emani2020_reference.md) | — | 1-compartment (no model) | 2 | Emani S et al., Platelet Inhibition With IV Glycoprotei…, Pediatric critical care med… (2020) | [10.1097/PCC.0000000000002292](https://doi.org/10.1097/PCC.0000000000002292) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=tirofiban).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ITGA2B (target), ITGB3 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 14 matched, 14 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Emani_2020.pdf` | Emani S et al., Platelet Inhibition With IV Glycoprotei…, Pediatric critical care med… (2020) | popPK | 6 | [10.1097/PCC.0000000000002292](https://doi.org/10.1097/PCC.0000000000002292) | [32168298](https://pubmed.ncbi.nlm.nih.gov/32168298) | Reports half-life, average steady-state concentration, and qualitative mention of clearance (with age/creatinine as covariates), but full compartmental PK parameter estimates (CL, V, Q) are not numerically provided in the abstract text. |
| `Moriguchi_2005.pdf` | Moriguchi A et al., FK419, a novel nonpeptide GPIIb/IIIa an…, Journal of cerebral blood f… (2005) | pd | 4 | [10.1038/sj.jcbfm.9600009](https://doi.org/10.1038/sj.jcbfm.9600009) | [15678114](https://www.ncbi.nlm.nih.gov/pubmed/15678114) | metadata signals extractable PD data (IC50) |
| `Zhou_2020.pdf` | Zhou MC et al., Subacute stent thrombosis in a patient…, International journal of cl… (2020) | pgx | 5 | [10.5414/CP203547](https://doi.org/10.5414/CP203547) | [32352367](https://www.ncbi.nlm.nih.gov/pubmed/32352367) | metadata signals extractable PGX data (CYP2C19*2) |
| `Zhou_2024.pdf` | Zhou Y et al., Use of Tirofiban to Prevent Ischemic Ev…, Translational stroke resear… (2024) | pgx | 5 | [10.1007/s12975-023-01171-3](https://doi.org/10.1007/s12975-023-01171-3) | [37523134](https://www.ncbi.nlm.nih.gov/pubmed/37523134) | metadata signals extractable PGX data (CYP2C19) |

<sub>queue written 2026-10-14T18:25:34.617280+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ding_2017 | not_relevant | 0 | 0 | The paper reports a case of stent thrombosis related to CYP2C19 polymorphism and clopidogrel, but tirofiban is only mentioned as a rescue therapy and no pharmacokinetic or pharmacodynamic parameters of tirofiban are analyzed in relation to the genotype. |
| popPK | Hantgan_2002 | irrelevant | 0 | 0 | The study is a biophysical investigation of receptor structure and binding affinities, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Marciniak_2001 | irrelevant | 1 | 0 | The study is an in-vitro mechanistic investigation of platelet inhibitory potency (IC50) and receptor binding kinetics, not a pharmacokinetic study reporting disposition parameters like clearance, volume, or half-life. |
| PGx | Meisel_2004 | not_relevant | 2 | 1 | The text is a general review of platelet polymorphisms and their theoretical role in atherothrombosis and variable drug response, but it does not present specific findings, data, or quantitative effect sizes for the pharmacokinetics or pharmacodynamics of tirofiban. |
| PGx | Meyer_2023 | not_relevant | 0 | 0 | The paper is a systematic review of clinical complication rates for various antiplatelet drugs and does not report pharmacokinetic or pharmacodynamic data related to specific genetic variants for tirofiban. |
| popPK | Moriguchi_2005 | irrelevant | 0 | 0 | The study evaluates the therapeutic efficacy of FK419 compared to tirofiban in a guinea-pig stroke model and reports in-vitro potency values (IC50/EC50), but it does not report any quantitative pharmacokinetic parameters (e.g., clearance, volume of distribution, half-life) for tirofiban. |
| PGx | Nordeen_2013 | not_relevant | 0 | 0 | The paper focuses on clopidogrel resistance in neuroendovascular procedures and does not report pharmacogenomic effects on the PK or PD parameters of tirofiban. |
| PGx | Schrör_2003 | not_relevant | 1 | 0 | The text explicitly states there is no clear evidence that gene polymorphisms (HPA-1) modify the biological activity of tirofiban. |
| popPK | Talreja_2004 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic assay of platelet inhibition, not a pharmacokinetic study, and reports no quantitative disposition parameters for tirofiban. |
| PGx | Wang_2021 | not_relevant | 0 | 0 | The paper reports a case of stent thrombosis and mentions genetic variants (CYP2C19, GPIa) associated with resistance to aspirin and clopidogrel, but it does not report any data on the pharmacokinetic or pharmacodynamic parameters of tirofiban. |
| PGx | Zhang_2021 | not_relevant | 1 | 0 | The paper is a clinical case report of in-stent thrombosis and does not report pharmacogenomic effects on the pharmacokinetic or pharmacodynamic parameters of tirofiban. |
| PGx | Zhou_2020 | not_relevant | 0 | 0 | The paper focuses on clopidogrel resistance mediated by CYP2C19, not pharmacogenomics of tirofiban. |
| PGx | Zhou_2024 | not_relevant | 2 | 5 | The study reports clinical outcomes (ischemic events) associated with CYP2C19 genotyping and tirofiban use, but does not report changes in tirofiban's PK or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 18:25 UTC</sub>
