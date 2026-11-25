<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01D&quot;,&quot;href&quot;:&quot;atc/L01D.md&quot;},{&quot;label&quot;:&quot;dactinomycin&quot;}]"></div>

# dactinomycin

- **generic name:** dactinomycin
- **ATC codes:** `L01DA01`
- **DrugBank:** [DB00970](https://go.drugbank.com/drugs/DB00970) · **PubChem:** [CID 457193](https://pubchem.ncbi.nlm.nih.gov/compound/457193)
- **molar mass:** 1255.417 g/mol (C62H86N12O16) — DrugBank
- **groups:** approved, investigational

## About

Dactinomycin is a cytotoxic antibiotic used to treat several types of cancer, including testicular tumors and sarcomas. This chemotherapy agent is widely utilized in clinical practice and is listed on the World Health Organization's essential medicines list.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q186127](https://www.wikidata.org/wiki/Q186127), [Wikipedia](https://en.wikipedia.org/wiki/Dactinomycin?oldid=1379231789) (CC BY-SA 4.0) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| dactinomycin | parent | 1255.42 | C62H86N12O16 | DrugBank | [457193](https://pubchem.ncbi.nlm.nih.gov/compound/457193) | Veal_2005 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Veal_2005_reference](drugs/drug_dactinomycin/Dactinomycin_Veal2005_reference.md) | — | 1-compartment (no model) | 2 | Veal GJ et al., Pharmacokinetics of dactinomycin in a p…, Clinical cancer research :… (2005) | [10.1158/1078-0432.CCR-04-2546](https://doi.org/10.1158/1078-0432.CCR-04-2546) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 20:47 | 0:03 | 0/1/0 | 0/0/0 | 0/0/0 | 4,057/150 | einfracz / qwen3.8-27b | 1 | 0/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chu_1999 | irrelevant | 0 | 0 | Dactinomycin is used only as a co-administered agent to induce endotoxemia for a hemodynamic study, with no pharmacokinetic parameters reported. |
| PGx | Chu_1999 | not_relevant | 0 | 0 | The paper studies hemodynamics in rats using dactinomycin as an endotoxin adjunct and does not report pharmacogenomic effects on dactinomycin PK/PD. |
| popPK | Dantonello_2009 | irrelevant | 0 | 0 | The paper is a clinical oncology trial reporting survival and response outcomes, containing no pharmacokinetic parameter values for dactinomycin. |
| PGx | Dantonello_2009 | not_relevant | 0 | 0 | The paper reports on an oncology clinical trial (CWS-91) involving chemotherapy but does not contain any pharmacogenomic data or analysis of gene variants affecting pharmacokinetic or pharmacodynamic parameters for dactinomycin. |
| popPK | Daw_2009 | irrelevant | 0 | 0 | The study focuses on renal function and carboplatin dosing, mentioning dactinomycin only as part of a background regimen without reporting its pharmacokinetic parameters. |
| PGx | Daw_2009 | not_relevant | 0 | 0 | The paper investigates renal function and carboplatin dosing in children with Wilms tumour, with no mention of pharmacogenomic variants affecting dactinomycin PK/PD. |
| popPK | Einhorn_1990 | irrelevant | 0 | 0 | The paper is a historical review of chemotherapy regimens for testicular cancer and does not contain any pharmacokinetic data or quantitative disposition parameters for dactinomycin. |
| PGx | Einhorn_1990 | not_relevant | 0 | 0 | The text discusses treatment outcomes and regimen changes for testicular cancer but contains no information regarding gene variants or pharmacogenomics. |
| popPK | Filosa_2025 | irrelevant | 0 | 0 | The study focuses on the chemical stability and decay of cyclophosphamide and etoposide solutions, not the pharmacokinetics of dactinomycin. |
| PGx | Filosa_2025 | not_relevant | 0 | 0 | The paper focuses on the chemical stability and decay of Cyclophosphamide and Etoposide, containing no information on dactinomycin or pharmacogenomic effects. |
| popPK | Labombarda_2025 | irrelevant | 0 | 0 | The paper is a pharmacovigilance disproportionality analysis of cardiac toxicity reports and contains no pharmacokinetic parameter values for dactinomycin. |
| PGx | Labombarda_2025 | not_relevant | 0 | 0 | The paper analyzes post-marketing safety signals for cardiac toxicity associated with dactinomycin and does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Mosende_1977 | irrelevant | 0 | 0 | The study reports clinical efficacy and toxicity of a chemotherapy regimen, not pharmacokinetic disposition parameters. |
| PGx | Mosende_1977 | not_relevant | 0 | 0 | The paper reports clinical outcomes of a chemotherapy combination and does not analyze genetic variants or their impact on dactinomycin PK/PD parameters. |
| popPK | Raine_1991 | irrelevant | 0 | 0 | The paper is a clinical case series describing a toxicity syndrome (hepatopathy-thrombocytopenia) and contains no pharmacokinetic parameters (CL, V, etc.) for dactinomycin. |
| PGx | Raine_1991 | not_relevant | 0 | 0 | The paper describes a clinical complication (hepatopathy-thrombocytopenia) associated with dactinomycin use but does not investigate any gene variants or genotypes and their effects on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Veal_2005 | not_relevant | 0 | 0 | The study characterizes general pharmacokinetics and toxicity relationships in a pediatric population but does not investigate or report any influence of specific gene variants or genotypes (pharmacogenomics). |
| popPK | Wu_2005 | irrelevant | 0 | 0 | This is a clinical review of Wilms' tumor management that mentions dactinomycin as a treatment agent but contains no pharmacokinetic data or parameter values. |
| PGx | Wu_2005 | not_relevant | 0 | 0 | The paper is a clinical review of Wilms' tumor management and contains no information on pharmacogenomics or genetic variants affecting drug PK/PD. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdactinomycin%5D&body=Drug%3A%20dactinomycin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_dactinomycin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 20:45 UTC</sub>
