<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D05A&quot;,&quot;href&quot;:&quot;atc/D05A.md&quot;},{&quot;label&quot;:&quot;tacalcitol&quot;}]"></div>

# tacalcitol

- **generic name:** tacalcitol
- **ATC codes:** `D05AX04`
- **DrugBank:** [DB13689](https://go.drugbank.com/drugs/DB13689) · **PubChem:** none
- **molar mass:** 416.646 g/mol (C27H44O3) — DrugBank
- **groups:** investigational

## About

Tacalcitol is a synthetic vitamin D analog used to treat psoriasis. It is administered topically as an emulsion or ointment.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q155682](https://www.wikidata.org/wiki/Q155682), [Wikipedia](https://en.wikipedia.org/wiki/Tacalcitol?oldid=1337352992) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Aggarwal_2016_target_plaque_scoring](drugs/drug_tacalcitol/pd_Aggarwal_2016_target_plaque_scoring.md) | target plaque scoring ← tacalcitol · stimulation effect | — | Aggarwal P et al., Tacalcitol: A useful adjunct to narrow…, The Journal of dermatologic… (2016) | [10.3109/09546634.2016.1163318](https://doi.org/10.3109/09546634.2016.1163318) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Dua_2017_TPS](drugs/drug_tacalcitol/pd_Dua_2017_TPS.md) | target plaque scoring ← tacalcitol · model not identified | — | Dua I et al., Comparative evaluation of efficacy and…, Photodermatology, photoimmu… (2017) | [10.1111/phpp.12324](https://doi.org/10.1111/phpp.12324) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 07:20 | 0:04 | 0/0/0 | 1/1/0 | 0/0/0 | 3,336/182 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 18 matched, 12 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aggarwal_2016 | irrelevant | 0 | 0 | The paper is a clinical efficacy study comparing topical tacalcitol plus phototherapy versus phototherapy alone, and it does not report any pharmacokinetic parameters. |
| PGx | Aggarwal_2016 | not_relevant | 0 | 0 | The paper evaluates the clinical efficacy of a phototherapy combination but does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Barker_1999 | irrelevant | 0 | 0 | The study is a clinical efficacy trial for maxacalcitol in psoriasis and does not report pharmacokinetic parameters for tacalcitol, which is only mentioned as a comparator in an in-vitro context. |
| PGx | Barker_1999 | not_relevant | 0 | 0 | The paper reports clinical efficacy of maxacalcitol but contains no information on gene variants or pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Choi_2010 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial for facial psoriasis and does not report any pharmacokinetic parameters. |
| PGx | Choi_2010 | not_relevant | 0 | 0 | The paper reports a clinical trial of tacalcitol efficacy in psoriasis but contains no data on gene variants, genotypes, or pharmacogenomic effects on PK/PD parameters. |
| popPK | Dua_2017 | irrelevant | 0 | 0 | The study is a clinical efficacy and safety trial comparing topical treatments, reporting no pharmacokinetic parameters for tacalcitol. |
| PGx | Dua_2017 | not_relevant | 0 | 0 | The paper compares the efficacy and safety of two drugs in a general psoriasis population and does not report pharmacogenomic effects or genotype-stratified PK/PD parameters. |
| popPK | Dusso_1991 | irrelevant | 2 | 3 | The study focuses on a different vitamin D analog (OCT/22-oxa-1,25-(OH)2D3) and does not report pharmacokinetic parameters for tacalcitol. |
| PGx | Dusso_1991 | not_relevant | 0 | 0 | The paper discusses vitamin D analogs (specifically 22-oxa-1,25-(OH)2D3) and their pharmacokinetics/affinity for DBP, but does not mention the drug tacalcitol or any gene variants/genotypes affecting tacalcitol parameters. |
| popPK | Huovinen_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of calcipotriol, not tacalcitol. |
| PGx | Huovinen_2019 | not_relevant | 0 | 0 | The paper studies calcipotriol, not tacalcitol, and does not report any genetic variations affecting PK/PD parameters. |
| popPK | Mitsuhashi_2005 | irrelevant | 0 | 0 | The paper is a clinical efficacy study on treating senile warts with topical vitamin D3 analogs and contains no pharmacokinetic parameters or quantitative disposition data for tacalcitol. |
| PGx | Mitsuhashi_2005 | not_relevant | 0 | 0 | The paper reports a clinical efficacy study of topical vitamin D3 (tacalcitol) on senile warts and mechanistic apoptosis, but does not investigate or report the effect of any gene variant, genotype, or phenotype on pharmacokinetic (PK) or pharmacodynamic (PD) parameters. |
| popPK | Pols_1991 | irrelevant | 0 | 0 | The study focuses on the in vitro pharmacological effects of MC903, a different vitamin D analog, and does not contain PK data for tacalcitol. |
| PGx | Pols_1991 | not_relevant | 0 | 0 | The paper discusses MC903, a different vitamin D analog, and does not report any pharmacogenomic effects on tacalcitol. |
| popPK | Ruzicka_2004 | irrelevant | 0 | 0 | The paper reports clinical efficacy and safety (serum calcium/PTH levels) rather than quantitative pharmacokinetic disposition parameters (CL, V, ka, etc.) for tacalcitol. |
| PGx | Ruzicka_2004 | not_relevant | 0 | 0 | The study evaluates the clinical efficacy and safety of tacalcitol for scalp psoriasis and reports no pharmacogenomic data or genetic variations affecting pharmacokinetics or pharmacodynamics. |
| popPK | Scott_2001 | irrelevant | 0 | 0 | This is a clinical review of calcipotriol where tacalcitol is mentioned only as a comparator drug, and no pharmacokinetic parameters are reported. |
| PGx | Scott_2001 | not_relevant | 0 | 0 | The paper is a clinical review of calcipotriol ointment's efficacy and safety, with no data on pharmacogenomics or genotype-based effects on PK/PD parameters. |
| popPK | Shen_2013 | irrelevant | 0 | 0 | The paper is a structure-activity relationship study of novel VDR agonists where tacalcitol is used only as a reference compound for in vitro binding and in vivo calcium levels, not for pharmacokinetic parameter estimation. |
| PGx | Shen_2013 | not_relevant | 0 | 0 | The paper evaluates novel nonsecosteroidal VDR agonists against tacalcitol as a control, but does not investigate the effect of gene variants or genotypes on the pharmacokinetics or pharmacodynamics of tacalcitol. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btacalcitol%5D&body=Drug%3A%20tacalcitol%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tacalcitol/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
