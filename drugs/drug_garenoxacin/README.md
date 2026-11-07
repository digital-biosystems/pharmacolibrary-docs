<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01M&quot;,&quot;href&quot;:&quot;atc/J01M.md&quot;},{&quot;label&quot;:&quot;garenoxacin&quot;}]"></div>

# garenoxacin

- **generic name:** garenoxacin
- **ATC codes:** `J01MA19`
- **DrugBank:** [DB06160](https://go.drugbank.com/drugs/DB06160) · **PubChem:** none
- **molar mass:** 426.42 g/mol (C23H20F2N2O4) — DrugBank
- **groups:** experimental

## About

Garenoxacin is a fluoroquinolone antibiotic developed as an antibacterial drug for treating bacterial infections. It remains experimental and has not been approved for routine clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3758306](https://www.wikidata.org/wiki/Q3758306) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| garenoxacin | parent | 426.42 | C23H20F2N2O4 | DrugBank | — | Tanigawara_2012, Van_2004, Yamagishi_2015 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub> | [Tanigawara_2012_end_of_phase_ii_stagea](drugs/drug_garenoxacin/Garenoxacin_Tanigawara2012_end_of_phase_ii_stagea.md) | — | 1-compartment (no model) | 1 | Tanigawara Y et al., Optimal dose finding of garenoxacin bas…, European journal of clinica… (2012) | [10.1007/s00228-011-1095-3](https://doi.org/10.1007/s00228-011-1095-3) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub> | [↳ end_of_phase_iii_stageb](drugs/drug_garenoxacin/Garenoxacin_Tanigawara2012_end_of_phase_iii_stageb.md) | — | 1-compartment (no model) | 1 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Van_2004_reference](drugs/drug_garenoxacin/Garenoxacin_Van2004_reference.md) | — | 1-compartment (no model) | 3 (+4 cov.) | Van Wart S et al., Population pharmacokinetics and pharmac…, Antimicrobial agents and ch… (2004) | [10.1128/AAC.48.12.4766-4777.2004](https://doi.org/10.1128/AAC.48.12.4766-4777.2004) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Yamagishi_2015_reference](drugs/drug_garenoxacin/Garenoxacin_Yamagishi2015_reference.md) | — | 1-compartment (no model) | 3 | Yamagishi Y et al., Pharmacokinetic study of garenoxacin in…, The Japanese journal of ant… (2015) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Hosoi_2026_log10_CFU_lung](drugs/drug_garenoxacin/pd_Hosoi_2026_log10_CFU_lung.md) | changes in pulmonary bacterial burden ← garenoxacin · direct sigmoid Emax (Hill) effect | — | Hosoi A et al., Three fluoroquinolones with different e…, Antimicrobial agents and ch… (2026) | [10.1128/aac.00375-26](https://doi.org/10.1128/aac.00375-26) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=garenoxacin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP1A2` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: TOP2A (inhibitor), TOP2B (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-13 12:00 | 33:36 | 2/2/0 | 1/0/0 | 0/0/0 | 313,663/123,727 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 2/2 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 4  ·  **relevant:** 3
- **records:** 4  ·  extracted 0  ·  needs review 2  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yamagishi_2015.pdf` | Yamagishi Y et al., Pharmacokinetic study of garenoxacin in…, The Japanese journal of ant… (2015) | popPK | 9 |  | [26349115](https://pubmed.ncbi.nlm.nih.gov/26349115) | The study reports quantitative PK parameters (Cmax, AUC, T1/2) for garenoxacin in humans, derived from a NONMEM analysis, with specific numeric values provided in the text. |
| `Ohsaki_2010.pdf` | Ohsaki Y et al., Pharmacokinetics of garenoxacin in elde…, International journal of an… (2010) | popPK | 8 | [10.1016/j.ijantimicag.2010.01.020](https://doi.org/10.1016/j.ijantimicag.2010.01.020) | [20207522](https://pubmed.ncbi.nlm.nih.gov/20207522) | The study reports PK parameters for garenoxacin in humans, but the specific numeric values are derived from Bayesian predictions using external population parameters and are not explicitly listed in the provided text. |

<sub>queue written 2026-10-13 11:45 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Czock_2007 | irrelevant | 1 | 0 | This is a review of PK-PD modeling mechanisms that uses garenoxacin only as a qualitative example of concentration-dependent effects, without reporting specific quantitative PK parameters. |
| popPK | Hosoi_2026 | relevant | 8 | 2 | The study reports quantitative PK parameters (CL, Vd, ka) for garenoxacin in mice using a one-compartment model, but the specific numeric values are located in supplementary Tables S1 to S3 which are not provided in the evidence. |
| popPK | Noreddin_2007 | irrelevant | 2 | 0 | This is a pharmacodynamic Monte Carlo simulation study that uses PK data from other sources and does not report original quantitative PK parameters (CL, V, etc.) for garenoxacin. |
| popPK | Ohsaki_2010 | relevant | 8 | 2 | The study reports PK parameters for garenoxacin in humans, but the specific numeric values are derived from Bayesian predictions using external population parameters and are not explicitly listed in the provided text. |
| popPK | Yamagishi_2017 | irrelevant | 2 | 1 | The study is a PK-PD breakpoint analysis using Monte Carlo simulation and does not report primary pharmacokinetic disposition parameters (CL, V, ka) for garenoxacin, only derived AUC and protein binding values. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bgarenoxacin%5D&body=Drug%3A%20garenoxacin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_garenoxacin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-10-13 11:45 UTC</sub>
