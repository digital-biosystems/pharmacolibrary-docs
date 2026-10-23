<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03C&quot;,&quot;href&quot;:&quot;atc/C03C.md&quot;},{&quot;label&quot;:&quot;torasemide&quot;}]"></div>

# torasemide

- **generic name:** torasemide
- **ATC codes:** `C03CA04`
- **DrugBank:** [DB00214](https://go.drugbank.com/drugs/DB00214) · **PubChem:** [CID 41781](https://pubchem.ncbi.nlm.nih.gov/compound/41781)
- **molar mass:** 348.42 g/mol (C16H20N4O3S) — DrugBank
- **groups:** approved, investigational

## About

Torasemide is a loop diuretic used to treat conditions involving fluid retention and high blood pressure, such as congestive heart failure, kidney disease, liver cirrhosis, and arterial hypertension. It is an approved medicine used widely in clinical practice, including in Europe, though it is not an EU-authorised product centrally evaluated by the EMA.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q419948](https://www.wikidata.org/wiki/Q419948) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| torasemide | parent | 348.42 | C16H20N4O3S | DrugBank | [41781](https://pubchem.ncbi.nlm.nih.gov/compound/41781) | Pelligand_2020 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | — | L/h | 61 % | healthy dogs | 16 | dog | <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> | [Pelligand_2020_reference](drugs/drug_torasemide/Torasemide_Pelligand2020_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. — the reported unit did not convert; the value is listed as reported. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="dog" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">dog</span><br><sub>stale — current check: Needs review</sub><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22 — no SI value to build from</sub> | [Pelligand_2020_reference](drugs/drug_torasemide/Torasemide_Pelligand2020_reference.md) | — | 1-compartment (no model) | 1 | Pelligand L et al., Population Pharmacokinetics and Pharmac…, Frontiers in veterinary sci… (2020) | [10.3389/fvets.2020.00151](https://doi.org/10.3389/fvets.2020.00151) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [Paulin_2016_diuresis](drugs/drug_torasemide/pd_Paulin_2016_diuresis.md) | diuresis ← torasemide excretion rate in urine · indirect response — drug inhibits the loss of diuresis | — | Paulin A et al., A pharmacokinetic/pharmacodynamic model…, Journal of veterinary pharm… (2016) | [10.1111/jvp.12316](https://doi.org/10.1111/jvp.12316) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **UMOD** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [McCallum_2024](drugs/drug_torasemide/pgx_McCallum_2024_UMOD_Q100.md) | McCallum L et al., UMOD Genotype-Blinded Trial of Ambulato…, Hypertension (Dallas, Tex.… (2024) | [10.1161/HYPERTENSIONAHA.124.23122](https://doi.org/10.1161/HYPERTENSIONAHA.124.23122) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=torasemide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| distribution | blood | `ALB` substrate | DrugBank actor |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `CYP2C8` substrate, `CYP2C9` inhibitor/substrate, `SLCO1B1` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: SLC12A1 (inhibitor), SLC12A2 (inhibitor), UMOD (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 19:44 | 4:31 | 1/0/0 | 1/0/0 | 0/0/1 | 65,369/10,622 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 0/3 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 28 matched, 28 returned
- **screened:** 3  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 1  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_9 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Paulin_2016.pdf` | Paulin A et al., A pharmacokinetic/pharmacodynamic model…, Journal of veterinary pharm… (2016) | popPK | 9 | [10.1111/jvp.12316](https://doi.org/10.1111/jvp.12316) | [27230410](https://pubmed.ncbi.nlm.nih.gov/27230410) | The study reports a PK/PD model for torasemide in dogs, but specific quantitative PK parameters (CL, V, ka) are not explicitly listed in the provided abstract text, only PD parameters like Imax and TERU50. |
| `Hampel_2021.pdf` | Hampel P et al., The search for brain-permeant NKCC1 inh…, Epilepsy & behavior : E&B 1… (2021) | popPK | 8 | [10.1016/j.yebeh.2020.107616](https://doi.org/10.1016/j.yebeh.2020.107616) | [33279441](https://pubmed.ncbi.nlm.nih.gov/33279441) | The study reports PK-PD modeling of torasemide in mice, but specific numeric parameter values (CL, V, etc.) are not explicitly listed in the provided abstract text. |
| `Barbanoj_2009.pdf` | Barbanoj MJ et al., A bioavailability/bioequivalence and ph…, Clinical and experimental p… (2009) | pd | 5 | [10.1111/j.1440-1681.2008.05089.x](https://doi.org/10.1111/j.1440-1681.2008.05089.x) | [19673928](https://www.ncbi.nlm.nih.gov/pubmed/19673928) | metadata signals extractable PD data (sigmoid) |
| `Werner_2008.pdf` | Werner D et al., Determinants of steady-state torasemide…, Clinical pharmacokinetics (2008) | pgx | 8 | [10.2165/00003088-200847050-00003](https://doi.org/10.2165/00003088-200847050-00003) | [18399713](https://www.ncbi.nlm.nih.gov/pubmed/18399713) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Bae_2004.pdf` | Bae SK et al., Effects of cysteine on the pharmacokine…, Journal of pharmaceutical s… (2004) | pgx | 7 | [10.1002/jps.20151](https://doi.org/10.1002/jps.20151) | [15295798](https://www.ncbi.nlm.nih.gov/pubmed/15295798) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Nadin_1999.pdf` | Nadin L et al., Participation of CYP2C8 in retinoic aci…, Biochemical pharmacology (1999) | pgx | 7 | [10.1016/s0006-2952(99)00192-6](https://doi.org/10.1016/s0006-2952(99)00192-6) | [10484078](https://www.ncbi.nlm.nih.gov/pubmed/10484078) | metadata signals extractable PGX data (CYP2C8, PK/PD-context) |
| `Bhasker_1997.pdf` | Bhasker CR et al., Allelic and functional variability of c…, Pharmacogenetics (1997) | pgx | 5 | [10.1097/00008571-199702000-00007](https://doi.org/10.1097/00008571-199702000-00007) | [9110362](https://www.ncbi.nlm.nih.gov/pubmed/9110362) | metadata signals extractable PGX data (CYP2C9) |
| `Li_2020.pdf` | Li Y et al., Quality of oral anticoagulation control…, Current medical research an… (2020) | pgx | 5 | [10.1080/03007995.2020.1796611](https://doi.org/10.1080/03007995.2020.1796611) | [32677855](https://www.ncbi.nlm.nih.gov/pubmed/32677855) | metadata signals extractable PGX data (CYP2C9*3) |
| `Yasar_1999.pdf` | Yasar U et al., Validation of methods for CYP2C9 genoty…, Biochemical and biophysical… (1999) | pgx | 5 | [10.1006/bbrc.1998.9992](https://doi.org/10.1006/bbrc.1998.9992) | [9920790](https://www.ncbi.nlm.nih.gov/pubmed/9920790) | metadata signals extractable PGX data (CYP2C9) |

<sub>queue written 2026-10-06 19:40 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Bae_2004 | not_relevant | 0 | 0 | The study investigates the effect of protein-calorie malnutrition and cysteine supplementation on torasemide PK in rats, not the effect of a specific gene variant or genotype. |
| popPK | Barbanoj_2009 | irrelevant | 0 | 0 | no_text gate: only 159 chars of text extracted (&lt; 400) |
| PD | Barbanoj_2009 | not_relevant | 0 | 0 | The paper is a bioavailability/bioequivalence and pharmacokinetic study that does not report pharmacodynamic or exposure-response data. |
| PGx | Bhasker_1997 | not_relevant | 2 | 0 | The paper explicitly states there was no apparent correlation between CYP2C9 genotype and the hydroxylation of torasemide, and no PK/PD parameters for torasemide were quantified. |
| popPK | Hampel_2021 | relevant | 8 | 2 | The study reports PK-PD modeling of torasemide in mice, but specific numeric parameter values (CL, V, etc.) are not explicitly listed in the provided abstract text. |
| popPK | Kipnowski_1986 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of ion transport in frog skin, not a pharmacokinetic study, and reports no disposition parameters for torasemide. |
| PD | Kipnowski_1986 | not_relevant | 0 | 0 | The paper explicitly states that torasemide did not affect sodium transport, so no dose-response or concentration-effect relationship is reported for this drug. |
| PGx | Li_2020 | not_relevant | 0 | 0 | The paper studies warfarin pharmacogenomics (CYP2C9/VKORC1) and mentions torasemide only as a concomitant medication associated with poor anticoagulation control, not as the primary drug for which a pharmacogenomic effect is reported. |
| PGx | Li_2025 | not_relevant | 0 | 0 | The paper investigates pharmacogenomic risk factors for methotrexate toxicity, not the pharmacokinetics or pharmacodynamics of torasemide. |
| popPK | Löffler-Walz_1998 | irrelevant | 0 | 0 | The study investigates the interaction of torasemide with K(ATP) channels in rat aorta (mechanistic/pharmacodynamic) and does not report pharmacokinetic parameters. |
| PGx | Nadin_1999 | not_relevant | 0 | 0 | The paper investigates the metabolism of retinoic acid by CYP2C8 and mentions torasemide only as a negative control inhibitor for CYP2C9, not as the drug of interest for pharmacogenomic analysis. |
| popPK | Paulin_2016 | relevant | 9 | 2 | The study reports a PK/PD model for torasemide in dogs, but specific quantitative PK parameters (CL, V, ka) are not explicitly listed in the provided abstract text, only PD parameters like Imax and TERU50. |
| PGx | Pavlova_2020 | not_relevant | 5 | 2 | The paper is a review that mentions the role of genetic liver metabolism polymorphism in torasemide efficacy/safety but does not report specific quantitative PK/PD parameter changes or fitted effect sizes. |
| popPK | Rolin_2004 | irrelevant | 0 | 0 | The study evaluates the pharmacological activity of a different compound (BM-591) and only mentions torasemide as a chemical reference or comparator for diuretic activity, without reporting any PK parameters for torasemide. |
| PD | Rolin_2004 | not_relevant | 0 | 0 | The paper evaluates the pharmacological properties of BM-591 enantiomers, not torasemide; torasemide is only mentioned as a chemical reference and its diuretic activity is noted to be lost in the analogs, with no PD parameters reported for torasemide itself. |
| PGx | Yasar_1999 | not_relevant | 0 | 0 | The paper reports allele frequencies and genotyping method validation in a healthy population, but does not measure or report any pharmacokinetic or pharmacodynamic parameters for torasemide. |
| PGx | Zhou_2009 | not_relevant | 0 | 0 | The paper is a review of CYP2C9 enzyme properties and mentions torasemide as a substrate, but it does not report specific pharmacogenomic data or quantitative PK/PD changes associated with CYP2C9 genotypes for torasemide. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btorasemide%5D&body=Drug%3A%20torasemide%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_torasemide/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-06 19:40 UTC</sub>
