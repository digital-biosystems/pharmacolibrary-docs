<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;pexidartinib&quot;}]"></div>

# pexidartinib

- **generic name:** pexidartinib
- **ATC codes:** `L01EX15`, `L01XE`
- **DrugBank:** [DB12978](https://go.drugbank.com/drugs/DB12978) · **PubChem:** [CID 25151352](https://pubchem.ncbi.nlm.nih.gov/compound/25151352)
- **molar mass:** 417.82 g/mol (C20H15ClF3N5) — DrugBank
- **groups:** approved, investigational

## About

Pexidartinib is a kinase inhibitor used to treat symptomatic tenosynovial giant cell tumor in adults. It is given orally in capsule form.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q25100640](https://www.wikidata.org/wiki/Q25100640), [Wikipedia](https://en.wikipedia.org/wiki/Pexidartinib?oldid=1379526928) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| pexidartinib | parent | 417.82 | C20H15ClF3N5 | DrugBank | [25151352](https://pubchem.ncbi.nlm.nih.gov/compound/25151352) | Yin_2021 |
| ZAAD | metabolite | — (mass units only) | — | — | — | — |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Yin_2021_reference](drugs/drug_pexidartinib/Pexidartinib_Yin2021_reference.md) | — | parent + metabolite (no model) | 3 | Yin O et al., Population Pharmacokinetic Analysis of…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1753](https://doi.org/10.1002/jcph.1753) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Yin_2021_2_ALT_3_ULN](drugs/drug_pexidartinib/pd_Yin_2021_2_ALT_3_ULN.md) | Time to first ALT &gt;3× upper limit of normal ← pexidartinib · direct log-linear effect | — | Yin O et al., Exposure-response analysis of efficacy…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12712](https://doi.org/10.1002/psp4.12712) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Yin_2021_2_AST_3_ULN](drugs/drug_pexidartinib/pd_Yin_2021_2_AST_3_ULN.md) | Time to first AST &gt;3× upper limit of normal ← pexidartinib · direct log-linear effect | — | Yin O et al., Exposure-response analysis of efficacy…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12712](https://doi.org/10.1002/psp4.12712) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Yin_2021_2_ORR](drugs/drug_pexidartinib/pd_Yin_2021_2_ORR.md) | Overall response rate ← pexidartinib · direct sigmoid Emax (Hill) effect | — | Yin O et al., Exposure-response analysis of efficacy…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12712](https://doi.org/10.1002/psp4.12712) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Yin_2021_2_TVS](drugs/drug_pexidartinib/pd_Yin_2021_2_TVS.md) | Longitudinally measured tumor size by TVS ← pexidartinib · inhibition effect | — | Yin O et al., Exposure-response analysis of efficacy…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12712](https://doi.org/10.1002/psp4.12712) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Yin_2021_2_RECIST](drugs/drug_pexidartinib/pd_Yin_2021_2_RECIST.md) | Longitudinally measured tumor size by RECIST ← pexidartinib · inhibition effect | — | Yin O et al., Exposure-response analysis of efficacy…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12712](https://doi.org/10.1002/psp4.12712) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 02:48 | 0:04 | 0/1/0 | 5/0/0 | 0/0/0 | 3,929/175 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Boal_2020.pdf` | Boal LH et al., Pediatric PK/PD Phase I Trial of Pexida…, Clinical cancer research :… (2020) | popPK | 10 | [10.1158/1078-0432.CCR-20-1696](https://doi.org/10.1158/1078-0432.CCR-20-1696) | [32943455](https://pubmed.ncbi.nlm.nih.gov/32943455) | The paper reports on a Phase I PK/PD study of pexidartinib in humans with population pharmacokinetic analysis, but the abstract and provided text do not contain specific numeric parameter values (CL, V, etc.). |

<sub>queue written 2026-11-24 02:48 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Boal_2020 | relevant | 10 | 1 | The paper reports on a Phase I PK/PD study of pexidartinib in humans with population pharmacokinetic analysis, but the abstract and provided text do not contain specific numeric parameter values (CL, V, etc.). |
| PGx | Boal_2020 | not_relevant | 0 | 0 | The paper reports standard pediatric PK/PD data and does not investigate or report any pharmacogenomic effects (gene variants/genotypes) on pexidartinib parameters. |
| PGx | Yin_2021 | not_relevant | 1 | 0 | The paper analyzes the impact of demographic and clinical covariates (such as race, weight, and organ function) on pexidartinib PK but does not report any effects based on genetic variants or genotypes. |
| popPK | Yin_2021_2 | irrelevant | 5 | 0 | The study is an exposure-response analysis that uses individual exposure metrics derived from a previously described population PK model (reference 5), but it does not report the quantitative PK disposition parameters (CL, V, Q, ka, half-life) for pexidartinib itself within this text. |
| PGx | Yin_2021_2 | not_relevant | 0 | 0 | The paper reports exposure-response relationships based on drug concentration (Cavg), but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpexidartinib%5D&body=Drug%3A%20pexidartinib%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_pexidartinib/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 15:20 UTC</sub>
