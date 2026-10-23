<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03C&quot;,&quot;href&quot;:&quot;atc/C03C.md&quot;},{&quot;label&quot;:&quot;bumetanide&quot;}]"></div>

# bumetanide

- **generic name:** bumetanide
- **ATC codes:** `C03CA02`, `C03CB02`, `C03EB02`
- **DrugBank:** [DB00887](https://go.drugbank.com/drugs/DB00887) · **PubChem:** [CID 2471](https://pubchem.ncbi.nlm.nih.gov/compound/2471)
- **molar mass:** 364.416 g/mol (C17H20N2O5S) — DrugBank
- **groups:** approved, investigational

## About

Bumetanide is a loop (high-ceiling) diuretic used to treat fluid retention and swelling in conditions such as congestive heart failure, pulmonary edema, nephrotic syndrome, liver cirrhosis, and arterial hypertension. It is an approved medicine that is widely used in clinical practice, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q275926](https://www.wikidata.org/wiki/Q275926) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| bumetanide | parent | 364.416 | C17H20N2O5S | DrugBank | [2471](https://pubchem.ncbi.nlm.nih.gov/compound/2471) | Pentikäinen_1985 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| t½ | t1/2z | 1.9 | h | 1.9 hours | healthy subjects and patients with renal failure | &gt;=28 | human | <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> | [Pentikäinen_1985_reference](drugs/drug_bumetanide/Bumetanide_Pentikinen1985_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Needs review</sub><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub> | [Pentikäinen_1985_reference](drugs/drug_bumetanide/Bumetanide_Pentikinen1985_reference.md) | — | 1-compartment (no model) | 4 | Pentikäinen PJ et al., Bumetanide kinetics in renal failure, Clinical pharmacology and t… (1985) | [10.1038/clpt.1985.91](https://doi.org/10.1038/clpt.1985.91) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Jullien_2016_reference](drugs/drug_bumetanide/Bumetanide_Jullien2016_reference.md) | — | 1-compartment (no model) | 0 | Jullien V et al., Pilot evaluation of the population phar…, Journal of clinical pharmac… (2016) | [10.1002/jcph.596](https://doi.org/10.1002/jcph.596) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **ACE** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Vormfelde_2012](drugs/drug_bumetanide/pgx_Vormfelde_2012_ACE_Q100.md) | Vormfelde SV et al., The genetics of loop diuretic effects, The pharmacogenomics journal (2012) | [10.1038/tpj.2010.68](https://doi.org/10.1038/tpj.2010.68) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **ADD1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Vormfelde_2012](drugs/drug_bumetanide/pgx_Vormfelde_2012_ADD1_Q100.md) | Vormfelde SV et al., The genetics of loop diuretic effects, The pharmacogenomics journal (2012) | [10.1038/tpj.2010.68](https://doi.org/10.1038/tpj.2010.68) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **ANP** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Vormfelde_2012](drugs/drug_bumetanide/pgx_Vormfelde_2012_ANP_Q100.md) | Vormfelde SV et al., The genetics of loop diuretic effects, The pharmacogenomics journal (2012) | [10.1038/tpj.2010.68](https://doi.org/10.1038/tpj.2010.68) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **GNB3** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Vormfelde_2012](drugs/drug_bumetanide/pgx_Vormfelde_2012_GNB3_Q100.md) | Vormfelde SV et al., The genetics of loop diuretic effects, The pharmacogenomics journal (2012) | [10.1038/tpj.2010.68](https://doi.org/10.1038/tpj.2010.68) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=bumetanide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `SLCO1A2` substrate | DrugBank actor |
| distribution | blood-brain barrier | `SLCO1A2` substrate | DrugBank actor |
| metabolism | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | kidney | `SLC22A7` inhibitor | DrugBank actor |
| metabolism | liver | `SLC10A1` inhibitor/substrate, `SLC22A7` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `SLC22A6` inhibitor/substrate, `SLC22A8` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ACE (target), ADD1 (target), ANP (target), CFTR (target), GNB3 (target), PTGS2 (inducer), SLC12A1 (inhibitor), SLC12A2 (inhibitor), SLC12A4 (inhibitor), SLC12A5 (inhibitor), SLC22A11 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 17:45 | 5:21 | 1/1/0 | 0/0/0 | 0/0/4 | 54,563/15,193 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 2/3 | 4/1 | 0 |

## Coverage

- **PubMed hits:** 80 matched, 29 returned
- **screened:** 6  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jullien_2016.pdf` | Jullien V et al., Pilot evaluation of the population phar…, Journal of clinical pharmac… (2016) | popPK | 10 | [10.1002/jcph.596](https://doi.org/10.1002/jcph.596) | [26189501](https://pubmed.ncbi.nlm.nih.gov/26189501) | The abstract explicitly reports quantitative population PK parameters (CL, Vc, Vp, Q) for bumetanide in term newborn infants. |
| `Marcantonio_1983.pdf` | Marcantonio LA et al., The pharmacokinetics and pharmacodynami…, British journal of clinical… (1983) | popPK | 10 | [10.1111/j.1365-2125.1983.tb01493.x](https://doi.org/10.1111/j.1365-2125.1983.tb01493.x) | [6849758](https://pubmed.ncbi.nlm.nih.gov/6849758) | The study reports quantitative PK parameters (clearance, half-life, bioavailability) for bumetanide in humans, but specific numeric values for CL and V are not explicitly listed in the provided abstract text, only qualitative comparisons and bioavailability values. |
| `Pentikäinen_1985.pdf` | Pentikäinen PJ et al., Bumetanide kinetics in renal failure, Clinical pharmacology and t… (1985) | popPK | 10 | [10.1038/clpt.1985.91](https://doi.org/10.1038/clpt.1985.91) | [3987182](https://pubmed.ncbi.nlm.nih.gov/3987182) | The abstract provides explicit quantitative values for volume of distribution, half-life, and clearance for bumetanide in humans. |
| `Popović_2013.pdf` | Popović JK et al., Individualization of a pharmacokinetic…, European journal of drug me… (2013) | popPK | 9 | [10.1007/s13318-012-0097-6](https://doi.org/10.1007/s13318-012-0097-6) | [22618469](https://pubmed.ncbi.nlm.nih.gov/22618469) | The study describes a population PK model for bumetanide in humans, but the specific numeric parameter values are not present in the provided evidence. |
| `Vormfelde_2007.pdf` | Vormfelde SV et al., Genetic variation in the renal sodium t…, Clinical pharmacology and t… (2007) | pgx | 5 | [10.1038/sj.clpt.6100131](https://doi.org/10.1038/sj.clpt.6100131) | [17460608](https://www.ncbi.nlm.nih.gov/pubmed/17460608) | metadata signals extractable PGX data (SLC12A1) |

<sub>queue written 2026-10-06T17:40:47.011999+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Bettinelli_1998 | not_relevant | 0 | 0 | The paper discusses genetic causes of renal tubulopathies (Bartter/Gitelman) and mentions bumetanide only as a reference for the target protein (NKCC2) or as a diagnostic tool, without reporting pharmacogenomic effects on bumetanide's PK or PD parameters. |
| PGx | Bourrit_1985 | not_relevant | 0 | 0 | The paper studies the effect of bumetanide on potassium transport in cell lines with cAMP pathway defects, not the effect of a gene variant on the PK/PD of bumetanide. |
| PGx | Boyarko_2023 | not_relevant | 0 | 0 | The paper discusses bumetanide's efficacy in APOE4-related Alzheimer's disease models but does not report pharmacogenomic effects on its pharmacokinetic or pharmacodynamic parameters. |
| PGx | Burckhardt_2016 | not_relevant | 0 | 0 | The paper investigates the transport of dantrolene and its metabolite by OAT2/OAT3, and while bumetanide is mentioned as a substrate in counter-flow experiments, the study does not report any pharmacogenomic effect on the PK or PD of bumetanide. |
| PGx | Carnovale_2023 | not_relevant | 0 | 0 | The paper is a review of neuropsychiatric effects and general pharmacokinetics (brain penetration) of antihypertensives, but it does not report specific pharmacogenomic effects (gene variant/genotype) on PK or PD parameters for bumetanide. |
| PGx | Casillas-Espinosa_2025 | not_relevant | 0 | 0 | The paper is a review of targeted therapies for early onset epilepsies and does not report pharmacogenomic effects on the PK or PD of bumetanide. |
| PGx | Fernandes_1994 | not_relevant | 0 | 0 | The paper studies the genetic control of erythrocyte volume regulation and uses bumetanide only as a tool to measure Na-K-Cl cotransporter activity, not as a therapeutic drug with a pharmacokinetic or pharmacodynamic endpoint. |
| popPK | Gu_2025 | irrelevant | 2 | 0 | The study is a PBPK modeling paper for eight drugs including bumetanide, but the evidence provided contains no specific quantitative PK parameter values (CL, V, etc.) for bumetanide, only general validation metrics for the group. |
| PGx | Lal_2024 | not_relevant | 0 | 0 | The text is a general introduction that mentions the need to explore genetic polymorphisms but does not report any specific pharmacogenomic effects on PK or PD parameters for bumetanide. |
| PGx | Li_2025 | not_relevant | 0 | 0 | The paper focuses on methotrexate pharmacogenomics and toxicity; bumetanide is only mentioned as a co-medication associated with toxicity risk, not as the subject of a pharmacogenomic PK/PD study. |
| popPK | Marcantonio_1983 | relevant | 10 | 2 | The study reports quantitative PK parameters (clearance, half-life, bioavailability) for bumetanide in humans, but specific numeric values for CL and V are not explicitly listed in the provided abstract text, only qualitative comparisons and bioavailability values. |
| popPK | Popović_2013 | relevant | 9 | 0 | The study describes a population PK model for bumetanide in humans, but the specific numeric parameter values are not present in the provided evidence. |
| PGx | Vokurková_2003 | not_relevant | 0 | 0 | The paper uses bumetanide as a tool to inhibit the Na+/K+ pump in erythrocytes to study ion transport mechanisms in Dahl rats, rather than investigating how genetic variants affect the pharmacokinetics or pharmacodynamics of bumetanide itself. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-06 17:40 UTC</sub>
