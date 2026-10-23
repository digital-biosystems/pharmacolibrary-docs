<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;ajmaline&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ajmaline_Iven1977_reference&quot;,&quot;label&quot;:&quot;Iven_1977_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ajmaline/Ajmaline_Iven1977_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

# ajmaline

- **generic name:** ajmaline
- **ATC codes:** `C01BA05`
- **DrugBank:** [DB01426](https://go.drugbank.com/drugs/DB01426) · **PubChem:** [CID 441080](https://pubchem.ncbi.nlm.nih.gov/compound/441080)
- **molar mass:** 326.4326 g/mol (C20H26N2O2) — DrugBank
- **groups:** approved, withdrawn

## About

Ajmaline is a class Ia antiarrhythmic, a sodium channel blocker used to treat heart rhythm disorders. It has been withdrawn from use in some markets, though it remains approved elsewhere.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q385858](https://www.wikidata.org/wiki/Q385858) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ajmaline | parent | 326.433 | C20H26N2O2 | DrugBank | [441080](https://pubchem.ncbi.nlm.nih.gov/compound/441080) | Elfner_1987, Iven_1977, Yasuhara_1987 |
| n-propyl-ajmaline | metabolite | 369.529 | C23H33N2O2+ | PubChem | [76959818](https://pubchem.ncbi.nlm.nih.gov/compound/76959818) | Elfner_1987 |

## Start here

> **Iven_1977_reference** — <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> mice, n = 16. [Run it in the simulator](drugs/drug_ajmaline/Ajmaline_Iven1977_reference.md?tab=Simulation) · [record](drugs/drug_ajmaline/Ajmaline_Iven1977_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 0.36 | L/h | 6 ml/min | mice | 16 | mouse | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Iven_1977_reference](drugs/drug_ajmaline/Ajmaline_Iven1977_reference.md) |
| V | V/F | 2.1 | L | 2100 ml | mice | 16 | mouse | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Iven_1977_reference](drugs/drug_ajmaline/Ajmaline_Iven1977_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="mouse" data-age="unknown" data-status="Not simulated" data-sim="yes"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">mouse</span><br><sub>stale — current check: Not simulated</sub> | [Iven_1977_reference](drugs/drug_ajmaline/Ajmaline_Iven1977_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Iven H, The pharmacokinetics and organ distribu…, Naunyn-Schmiedeberg's archi… (1977) | [10.1007/BF00510985](https://doi.org/10.1007/BF00510985) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q59 — no SI value to build from</sub> | [Elfner_1987_reference](drugs/drug_ajmaline/Ajmaline_Elfner1987_reference.md) | — | 1-compartment (no model) | 8 | Elfner R et al., Pharmacokinetics of n-propyl-ajmaline-b…, European journal of drug me… (1987) | [10.1007/BF03189865](https://doi.org/10.1007/BF03189865) |
| <span class="pk-rf" hidden data-species="dog" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Yasuhara_1987_dog_1](drugs/drug_ajmaline/Ajmaline_Yasuhara1987_dog_1.md) | — | 1-compartment (no model) | 5 | Yasuhara M et al., Kinetics of ajmaline disposition and ph…, Journal of pharmacokinetics… (1987) | [10.1007/BF01062938](https://doi.org/10.1007/BF01062938) |
| <span class="pk-rf" hidden data-species="dog" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [↳ dog_2](drugs/drug_ajmaline/Ajmaline_Yasuhara1987_dog_2.md) | — | 1-compartment (no model) | 5 |  |  |
| <span class="pk-rf" hidden data-species="dog" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [↳ dog_3](drugs/drug_ajmaline/Ajmaline_Yasuhara1987_dog_3.md) | — | 1-compartment (no model) | 5 |  |  |
| <span class="pk-rf" hidden data-species="dog" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [↳ dog_4](drugs/drug_ajmaline/Ajmaline_Yasuhara1987_dog_4.md) | — | 1-compartment (no model) | 5 |  |  |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Bébarová_2005_ICa_L](drugs/drug_ajmaline/pd_B_barov_2005_ICa_L.md) | L-type calcium current ← ajmaline · direct sigmoid Emax (Hill) effect | — | Bébarová M et al., Effect of ajmaline on action potential…, General physiology and biop… (2005) | — |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Bébarová_2005_IK_ATP](drugs/drug_ajmaline/pd_B_barov_2005_IK_ATP.md) | ATP-sensitive potassium current ← ajmaline · direct sigmoid Emax (Hill) effect | — | Bébarová M et al., Effect of ajmaline on action potential…, General physiology and biop… (2005) | — |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Bébarová_2005_INa](drugs/drug_ajmaline/pd_B_barov_2005_INa.md) | fast sodium current ← ajmaline · direct sigmoid Emax (Hill) effect | — | Bébarová M et al., Effect of ajmaline on action potential…, General physiology and biop… (2005) | — |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Bébarová_2005_Ito](drugs/drug_ajmaline/pd_B_barov_2005_Ito.md) | transient outward potassium current ← ajmaline · direct sigmoid Emax (Hill) effect | — | Bébarová M et al., Effect of ajmaline on action potential…, General physiology and biop… (2005) | — |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Bébarová_2005_current_measured_at_the_end_of_300_ms_depolarizing_impulse](drugs/drug_ajmaline/pd_B_barov_2005_current_measured_at_the_end_of_300_ms_depolariz.md) | current measured at the end of 300 ms depolarizing impulse ← ajmaline · direct sigmoid Emax (Hill) effect | — | Bébarová M et al., Effect of ajmaline on action potential…, General physiology and biop… (2005) | — |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">other animal</span> | [Friedrich_2007_I_K](drugs/drug_ajmaline/pd_Friedrich_2007_I_K.md) | I K ← ajmaline · direct sigmoid Emax (Hill) effect | — | Friedrich O et al., NA+- and K+-channels as molecular targe…, British journal of pharmaco… (2007) | [10.1038/sj.bjp.0707194](https://doi.org/10.1038/sj.bjp.0707194) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">other animal</span> | [Friedrich_2007_I_Na](drugs/drug_ajmaline/pd_Friedrich_2007_I_Na.md) | I Na ← ajmaline · direct sigmoid Emax (Hill) effect | — | Friedrich O et al., NA+- and K+-channels as molecular targe…, British journal of pharmaco… (2007) | [10.1038/sj.bjp.0707194](https://doi.org/10.1038/sj.bjp.0707194) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [Yasuhara_1987_PQ](drugs/drug_ajmaline/pd_Yasuhara_1987_PQ.md) | PQ interval change ← ajmaline · delayed effect through an effect compartment | model (no simulator) | Yasuhara M et al., Kinetics of ajmaline disposition and ph…, Journal of pharmacokinetics… (1987) | [10.1007/BF01062938](https://doi.org/10.1007/BF01062938) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [Yasuhara_1987_QRS](drugs/drug_ajmaline/pd_Yasuhara_1987_QRS.md) | QRS interval change ← ajmaline · delayed effect through an effect compartment | model (no simulator) | Yasuhara M et al., Kinetics of ajmaline disposition and ph…, Journal of pharmacokinetics… (1987) | [10.1007/BF01062938](https://doi.org/10.1007/BF01062938) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP2D6** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Köppel_1989](drugs/drug_ajmaline/pgx_K_ppel_1989_CYP2D6_Q100.md) | Köppel C et al., Metabolic disposition of ajmaline, European journal of drug me… (1989) | [10.1007/BF03190117](https://doi.org/10.1007/BF03190117) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=ajmaline).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ORM1` unknown | DrugBank actor |
| metabolism | brain | `CYP2D6` metabolism | PGx paper |
| metabolism | liver | `CYP2D6` metabolism | PGx paper |

<sub>Actors without a tissue in the table: SCN5A (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-08 15:52 | 20:14 | 2/4/0 | 3/0/0 | 0/0/1 | 207,433/60,541 | ollama / qwen3.8:27b-mtp-q8_0 | 8 | 6/2 | 3/5 | 0 |

## Coverage

- **PubMed hits:** 43 matched, 31 returned
- **screened:** 8  ·  **relevant:** 4
- **records:** 6  ·  extracted 1  ·  needs review 1  ·  rejected 4  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Spilker_1975.pdf` | Spilker B et al., Cardiovascular effects and blood concen…, Archives internationales de… (1975) | popPK | 8 |  | [1164107](https://pubmed.ncbi.nlm.nih.gov/1164107) | The study reports quantitative PK parameters for ajmaline in cats, specifically a half-life of 100 min and peak blood level timing, though full compartmental parameters (CL, V) are not explicitly listed in the text. |
| `Miao_2025.pdf` | Miao Z et al., Zebrafish embryos as a teratogenicity s…, Reproductive toxicology (El… (2025) | pd | 5 | [10.1016/j.reprotox.2025.108895](https://doi.org/10.1016/j.reprotox.2025.108895) | [40097051](https://www.ncbi.nlm.nih.gov/pubmed/40097051) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-08 15:46 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alvarez_1992 | irrelevant | 0 | 0 | The study investigates the electrophysiological mechanism of action of prajmalium (an ajmaline derivative) in rabbit cardiomyocytes and does not report pharmacokinetic parameters for ajmaline. |
| popPK | Bébarová_2005 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of ionic currents and action potentials, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Friedrich_2007 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of ajmaline's effects on ion channels in frog muscle, reporting IC50 values for channel blockade rather than pharmacokinetic disposition parameters. |
| popPK | Miao_2025 | irrelevant | 0 | 0 | no_text gate: only 86 chars of text extracted (&lt; 400) |
| PD | Miao_2025 | not_relevant | 0 | 0 | The paper focuses on zebrafish teratogenicity screening and does not report any pharmacodynamic or exposure-response data for ajmaline. |
| popPK | Rukachaisirikul_2017 | irrelevant | 0 | 0 | The paper is a phytochemical study on the isolation and structural elucidation of alkaloids from plant roots, containing no pharmacokinetic data. |
| PD | Rukachaisirikul_2017 | not_relevant | 0 | 0 | The paper is a phytochemical isolation study reporting the identification of alkaloids; it does not report a pharmacodynamic or exposure-response relationship for ajmaline, only mentioning its isolation. |
| PGx | Sheludko_2020 | not_relevant | 0 | 0 | The paper focuses on the biosynthesis of plant alkaloids using CYP3A4, not on the pharmacokinetics or pharmacodynamics of ajmaline in humans. |
| PD | Si_0000 | not_relevant | 0 | 0 | The paper reports IC50 values for novel compounds (nutanosides/nutanesters) and mentions ajmaline only as a structural class reference, providing no pharmacodynamic or exposure-response data for ajmaline itself. |
| popPK | Yasuhara_1987 | relevant | 9 | 0 | The study reports a two-compartment PK model for ajmaline in dogs, but the specific numeric parameter values are not present in the provided evidence text. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bajmaline%5D&body=Drug%3A%20ajmaline%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ajmaline/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-08 15:33 UTC</sub>
