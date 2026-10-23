<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;leflunomide&quot;}]"></div>

# leflunomide

- **generic name:** leflunomide
- **ATC codes:** `L04AA13`, `L04AK01`
- **DrugBank:** [DB01097](https://go.drugbank.com/drugs/DB01097) · **PubChem:** [CID 3899](https://pubchem.ncbi.nlm.nih.gov/compound/3899)
- **molar mass:** 270.2073 g/mol (C12H9F3N2O2) — DrugBank
- **groups:** approved, investigational

## About

Leflunomide is an immunosuppressive disease-modifying antirheumatic drug used to treat rheumatoid arthritis and psoriatic arthritis. It is approved and authorised in the European Union, where several products remain on the market, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q248550](https://www.wikidata.org/wiki/Q248550) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| leflunomide | parent | 270.207 | C12H9F3N2O2 | DrugBank | [3899](https://pubchem.ncbi.nlm.nih.gov/compound/3899) | Hopkins_2015, Li_2002 |
| A77 1726 | metabolite | — (mass units only) | — | — | — | — |
| A771726 | metabolite | — (mass units only) | — | — | — | — |
| tereflunomide | metabolite | — (mass units only) | — | — | — | — |
| teriflunomide | metabolite | 270.21 | C12H9F3N2O2 | PubChem | [54684141](https://pubchem.ncbi.nlm.nih.gov/compound/54684141) | Hopkins_2015 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| V | V | 1 ‡ | L | 1 L/70kg | rheumatoid arthritis patients | &gt;= 18 years, 69 RA patients | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Hopkins_2015_initial_literature_estimate](drugs/drug_leflunomide/Leflunomide_Hopkins2015_initial_literature_estimate.md) |
| V | V1 | 7.5 ‡ | L | 7.5 L/70kg | rheumatoid arthritis patients | &gt;= 18 years, 69 RA patients | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Hopkins_2015_initial_literature_estimate](drugs/drug_leflunomide/Leflunomide_Hopkins2015_initial_literature_estimate.md) |
| ka | kabs | 1 | 1/h | 24 day−1 | rheumatoid arthritis patients | &gt;= 18 years, 69 RA patients | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Hopkins_2015_initial_literature_estimate](drugs/drug_leflunomide/Leflunomide_Hopkins2015_initial_literature_estimate.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. ‡ given per kg in the paper; shown for a 70 kg adult. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="V across studies"><text x="190" y="14" font-size="12" font-weight="600">V (L, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">1</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">10</text><text x="184" y="34.0" font-size="11" text-anchor="end">Hopkins_2015 · V ·/kg</text><circle cx="190.0" cy="30.0" r="4" fill="#ef6c00"><title>Hopkins_2015 · V ·/kg: 1 L</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Hopkins_2015 · V1 ·/kg</text><circle cx="496.3" cy="46.0" r="4" fill="#ef6c00"><title>Hopkins_2015 · V1 ·/kg: 7.5 L</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub> | [Hopkins_2015_base](drugs/drug_leflunomide/Leflunomide_Hopkins2015_base.md) | — | parent + metabolite (no model) | 5 | Hopkins AM et al., Semiphysiologically Based Pharmacokinet…, CPT: pharmacometrics & syst… (2015) | [10.1002/psp4.46](https://doi.org/10.1002/psp4.46) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub> | [↳ full](drugs/drug_leflunomide/Leflunomide_Hopkins2015_full.md) | — | parent + metabolite (no model) | 4 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q305 — no SI value to build from</sub> | [↳ initial_literature_estimate](drugs/drug_leflunomide/Leflunomide_Hopkins2015_initial_literature_estimate.md) | — | parent + metabolite (no model) | 13 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Bohanec_2009_reference](drugs/drug_leflunomide/Leflunomide_Bohanec2009_reference.md) | — | 1-compartment (no model) | 0 | Bohanec Grabar P et al., Investigation of the influence of CYP1A…, Drug metabolism and disposi… (2009) | [10.1124/dmd.109.027482](https://doi.org/10.1124/dmd.109.027482) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Chan_2005_reference](drugs/drug_leflunomide/Leflunomide_Chan2005_reference.md) | — | 1-compartment (no model) | 0 | Chan V et al., Population pharmacokinetics and associa…, British journal of clinical… (2005) | [10.1111/j.1365-2125.2005.02415.x](https://doi.org/10.1111/j.1365-2125.2005.02415.x) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Li_2002_reference](drugs/drug_leflunomide/Leflunomide_Li2002_reference.md) | — | 1-compartment (no model) | 5 | Li J et al., Pharmacokinetics of leflunomide in Chin…, Acta pharmacologica Sinica (2002) | — |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Shi_2005_reference](drugs/drug_leflunomide/Leflunomide_Shi2005_reference.md) | — | 1-compartment (no model) | 0 | Shi J et al., Population pharmacokinetics of the acti…, Journal of pharmacokinetics… (2005) | [10.1007/s10928-005-0049-8](https://doi.org/10.1007/s10928-005-0049-8) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=leflunomide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCG2` substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCG2` substrate | DrugBank actor |
| distribution | mammary gland | `ABCG2` substrate | DrugBank actor |
| distribution | testis | `ABCG2` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2C9` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | liver | `ABCG2` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: AHR (target), DHODH (inhibitor), PTK2B (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:02 | 4:30 | 3/4/0 | 0/0/0 | 0/0/0 | 337,549/33,389 | einfracz / qwen3.8-27b | 5 | 0/5 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 14 matched, 14 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 7  ·  extracted 0  ·  needs review 3  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_7 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bohanec_2009.pdf` | Bohanec Grabar P et al., Investigation of the influence of CYP1A…, Drug metabolism and disposi… (2009) | popPK | 10 | [10.1124/dmd.109.027482](https://doi.org/10.1124/dmd.109.027482) | [19581389](https://pubmed.ncbi.nlm.nih.gov/19581389) | The study models the pharmacokinetics of leflunomide's active metabolite (A77 1726), reporting quantitative estimates for oral clearance (CL/F) and volume of distribution (V/F) derived from a population model in humans. |
| `Chan_2005.pdf` | Chan V et al., Population pharmacokinetics and associa…, British journal of clinical… (2005) | popPK | 10 | [10.1111/j.1365-2125.2005.02415.x](https://doi.org/10.1111/j.1365-2125.2005.02415.x) | [16120064](https://pubmed.ncbi.nlm.nih.gov/16120064) | The study is a population PK model of leflunomide (via its active metabolite A77 1726) in humans, and the specific numeric values for CL/F and variability are provided in the abstract text. |
| `Li_2002.pdf` | Li J et al., Pharmacokinetics of leflunomide in Chin…, Acta pharmacologica Sinica (2002) | popPK | 10 |  | [12060531](https://pubmed.ncbi.nlm.nih.gov/12060531) | The study reports quantitative pharmacokinetic parameters for leflunomide's active metabolite A771726, including half-life, Cmax, and AUC. |
| `Mehl_2012.pdf` | Mehl ML et al., Pharmacokinetics and pharmacodynamics o…, Journal of veterinary pharm… (2012) | popPK | 10 | [10.1111/j.1365-2885.2011.01306.x](https://doi.org/10.1111/j.1365-2885.2011.01306.x) | [21615755](https://pubmed.ncbi.nlm.nih.gov/21615755) | The abstract reports specific quantitative pharmacokinetic parameters (ka, kel, t1/2, AUC, Cmax, bioavailability) for leflunomide in cats. |
| `Shi_2005.pdf` | Shi J et al., Population pharmacokinetics of the acti…, Journal of pharmacokinetics… (2005) | popPK | 10 | [10.1007/s10928-005-0049-8](https://doi.org/10.1007/s10928-005-0049-8) | [16284916](https://pubmed.ncbi.nlm.nih.gov/16284916) | The paper reports a population pharmacokinetic model for leflunomide's active metabolite M1 with specific equations for clearance and volume of distribution. |
| `Shin_2023.pdf` | Shin Y et al., Development of a population pharmacokin…, European journal of pharmac… (2023) | popPK | 9 | [10.1016/j.ejps.2023.106402](https://doi.org/10.1016/j.ejps.2023.106402) | [36754259](https://pubmed.ncbi.nlm.nih.gov/36754259) | The paper is a population PK study of leflunomide's active metabolite (A771726) in humans, but the specific numeric parameter estimates (CL, V, etc.) are not explicitly listed in the provided evidence text, only the model structure and qualitative results. |
| `Yao_2019.pdf` | Yao X et al., A population pharmacokinetic study to a…, European journal of pharmac… (2019) | popPK | 9 | [10.1016/j.ejps.2019.05.020](https://doi.org/10.1016/j.ejps.2019.05.020) | [31154006](https://pubmed.ncbi.nlm.nih.gov/31154006) | The study performs a population PK analysis of leflunomide (specifically for its metabolite teriflunomide) in humans, but the specific numeric parameter values are likely contained in the full text or tables not provided in the abstract evidence. |

<sub>queue written 2026-10-06 23:58 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Hopkins_2016 | irrelevant | 0 | 0 | The study focuses on a time-to-event model for drug cessation and pharmacogenetics, rather than reporting quantitative population pharmacokinetic parameters (CL, V, etc.) for leflunomide or teriflunomide. |
| popPK | Kaur_2021 | irrelevant | 0 | 0 | The paper is a narrative review of the antiviral efficacy of leflunomide in COVID-19 and does not report population pharmacokinetic parameters (CL, V, etc.). |
| popPK | Lang_2023 | irrelevant | 0 | 0 | The paper is an in vitro antiviral efficacy study of teriflunomide and leflunomide against SARS-CoV-2, reporting only EC50/CC50 values, with no pharmacokinetic parameters (CL, V, t1/2, etc.) for leflunomide. |
| popPK | Shin_2023 | relevant | 9 | 1 | The paper is a population PK study of leflunomide's active metabolite (A771726) in humans, but the specific numeric parameter estimates (CL, V, etc.) are not explicitly listed in the provided evidence text, only the model structure and qualitative results. |
| popPK | Thanigaimani_2022 | irrelevant | 0 | 0 | The paper examines the association of immunosuppressant drug use (including leflunomide) with abdominal aortic aneurysm growth and does not report any pharmacokinetic parameters for leflunomide. |
| popPK | Wiese_2021 | irrelevant | 2 | 0 | The study is a pharmacogenomic/pharmacodynamic analysis of therapeutic response and teriflunomide concentration thresholds, not a pharmacokinetic study reporting disposition parameters like CL, V, or t1/2. |
| popPK | Xiong_2020 | irrelevant | 0 | 0 | The study focuses on novel DHODH inhibitors (S312 and S416) and their antiviral properties, using leflunomide only as a comparator or reference compound without reporting its specific pharmacokinetic parameters. |
| popPK | Yao_2019 | relevant | 9 | 2 | The study performs a population PK analysis of leflunomide (specifically for its metabolite teriflunomide) in humans, but the specific numeric parameter values are likely contained in the full text or tables not provided in the abstract evidence. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bleflunomide%5D&body=Drug%3A%20leflunomide%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_leflunomide/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-06 23:58 UTC</sub>
