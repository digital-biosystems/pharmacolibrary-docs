<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A08A&quot;,&quot;href&quot;:&quot;atc/A08A.md&quot;},{&quot;label&quot;:&quot;amfepramone&quot;}]"></div>

# amfepramone

- **generic name:** amfepramone
- **ATC codes:** `A08AA03`
- **DrugBank:** [DB00937](https://go.drugbank.com/drugs/DB00937) · **PubChem:** none
- **groups:** approved, illicit, investigational

## About

Amfepramone (diethylpropion) is a centrally acting anorectic drug used to treat obesity. It remains an approved antiobesity medicine, though it is also listed as illicit in some contexts and has investigational uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2356505](https://www.wikidata.org/wiki/Q2356505) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **ABCB1** | `Q27` · CL/F | transport | [Gómez-Silva_2019](drugs/drug_amfepramone/pgx_G_mez_Silva_2019_ABCB1_Q27.md) | Gómez-Silva M et al., Pharmacogenetics of amfepramone in heal…, Scientific reports (2019) | [10.1038/s41598-019-54436-z](https://doi.org/10.1038/s41598-019-54436-z) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP3A4** | `Q27` · CL/F | metabolism | [Gómez-Silva_2019](drugs/drug_amfepramone/pgx_G_mez_Silva_2019_CYP3A4_Q27.md) | Gómez-Silva M et al., Pharmacogenetics of amfepramone in heal…, Scientific reports (2019) | [10.1038/s41598-019-54436-z](https://doi.org/10.1038/s41598-019-54436-z) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=amfepramone).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` transport | PGx paper |
| distribution | blood-brain barrier | `ABCB1` transport | PGx paper |
| distribution | placenta | `ABCB1` transport | PGx paper |
| distribution | testis | `ABCB1` transport | PGx paper |
| metabolism | liver | `CYP3A4` metabolism | PGx paper |
| metabolism | small intestine | `CYP3A4` metabolism | PGx paper |
| excretion | kidney | `ABCB1` transport | PGx paper |
| excretion | liver | `ABCB1` transport | PGx paper |
| — | brain | `SLC6A4` inhibitor | DrugBank actor |
| — | platelet | `SLC6A4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: SLC6A2 (inhibitor), SLC6A3 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 20:19 | 1:19 | 0/0/0 | 0/0/0 | 0/0/2 | 31,845/1,640 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 0/3 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 10 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dangor_1987.pdf` | Dangor CM et al., Bioavailability of amfepramone hydrochl…, Arzneimittel-Forschung (1987) | popPK | 8 |  | [3663274](https://pubmed.ncbi.nlm.nih.gov/3663274) | The study reports pharmacokinetic profiles and bioavailability for amfepramone in humans, but the specific numeric parameter values (CL, V, t1/2, etc.) are not present in the provided evidence text. |

<sub>queue written 2026-10-04 20:18 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Branis_2015 | irrelevant | 0 | 0 | The paper is a case report regarding Diethylpropion and does not study amfepramone or report any pharmacokinetic parameters for it. |
| popPK | Dangor_1987 | relevant | 8 | 0 | The study reports pharmacokinetic profiles and bioavailability for amfepramone in humans, but the specific numeric parameter values (CL, V, t1/2, etc.) are not present in the provided evidence text. |
| popPK | Douglas_1982 | irrelevant | 0 | 0 | The paper is a clinical review of obesity treatment guidelines and does not report any pharmacokinetic parameters for amfepramone. |
| popPK | Gómez_1993 | irrelevant | 0 | 0 | The study focuses on diethylpropion, not amfepramone, and is an in vitro stability/dissolution study without PK parameters. |
| popPK | Mey_1998 | irrelevant | 0 | 0 | The study investigates the racemization kinetics of diethylpropion, not the pharmacokinetics of amfepramone. |
| popPK | Poyatos_2022 | irrelevant | 2 | 0 | The paper is a systematic review of cathinones (cathinone, mephedrone, methylone) and diethylpropion (amfepramone), but it does not report quantitative disposition parameters (CL, V, Q, ka) for amfepramone, only mentioning it as a comparator or in the context of abuse potential without specific PK values in the provided evidence. |
| popPK | Yang_2022 | irrelevant | 0 | 0 | The paper is a forensic toxicology study reporting hair concentrations, not a pharmacokinetic study with disposition parameters. |
| PD | Yang_2022 | not_relevant | 0 | 0 | The paper describes a forensic LC-MS/MS method for detecting amfepramone in hair and reports concentration ranges in authentic cases, but it does not report any pharmacodynamic, exposure-response, or dose-response relationship or numeric PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bamfepramone%5D&body=Drug%3A%20amfepramone%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_amfepramone/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
