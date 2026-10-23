<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C10A&quot;,&quot;href&quot;:&quot;atc/C10A.md&quot;},{&quot;label&quot;:&quot;fenofibrate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fenofibrate_Back2018_reference&quot;,&quot;label&quot;:&quot;Back_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fenofibrate/Fenofibrate_Back2018_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fenofibrate_Zhang2024_reference&quot;,&quot;label&quot;:&quot;Zhang_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fenofibrate/Fenofibrate_Zhang2024_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# fenofibrate

- **generic name:** fenofibrate
- **ATC codes:** `C10AB05`, `C10BA03`, `C10BA04`, `C10BA09`, `C10BA12`
- **DrugBank:** [DB01039](https://go.drugbank.com/drugs/DB01039) · **PubChem:** [CID 3339](https://pubchem.ncbi.nlm.nih.gov/compound/3339)
- **molar mass:** 360.831 g/mol (C20H21ClO4) — DrugBank
- **groups:** approved, investigational

## About

Fenofibrate is a fibrate-class lipid-lowering drug used to reduce cholesterol and treat dyslipidemias such as hypertriglyceridemia and familial hyperlipidemia. It is an approved medicine, widely used, and also available in combination products with other lipid-modifying agents.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q419724](https://www.wikidata.org/wiki/Q419724) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| fenofibrate | parent | 360.831 | C20H21ClO4 | DrugBank | [3339](https://pubchem.ncbi.nlm.nih.gov/compound/3339) | Back_2018 |
| fenofibric acid | metabolite | 318.753 | C17H15ClO4 | PubChem | [64929](https://pubchem.ncbi.nlm.nih.gov/compound/64929) | Back_2018 |

## Start here

> **Back_2018_reference** — <span class="pk-badge pk-badge--green">Reproduces paper</span> healthy adults. [Run it in the simulator](drugs/drug_fenofibrate/Fenofibrate_Back2018_reference.md?tab=Simulation) · [record](drugs/drug_fenofibrate/Fenofibrate_Back2018_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL/F | 3.23 | L/h | 3.23 L/h | review reference | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Zhang_2024_reference](drugs/drug_fenofibrate/Fenofibrate_Zhang2024_reference.md) |
| V | V/F | 157 | L | 157.0 L | review reference | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Zhang_2024_reference](drugs/drug_fenofibrate/Fenofibrate_Zhang2024_reference.md) |
| ka | kabs | 0.042 | 1/h | 0.042 hr−1 | healthy adults | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Back_2018_reference](drugs/drug_fenofibrate/Fenofibrate_Back2018_reference.md) |
| ka | kabs | 1.06 | 1/h | 1.06 /h | review reference | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Zhang_2024_reference](drugs/drug_fenofibrate/Fenofibrate_Zhang2024_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Back_2018_reference](drugs/drug_fenofibrate/Fenofibrate_Back2018_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Back HM et al., A mechanism-based pharmacokinetic model…, BMC pharmacology & toxicolo… (2018) | [10.1186/s40360-018-0194-5](https://doi.org/10.1186/s40360-018-0194-5) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Zhang_2024_reference](drugs/drug_fenofibrate/Fenofibrate_Zhang2024_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Zhang C et al., Drug-drug interaction and initial dosag…, Frontiers in psychiatry (2024) | [10.3389/fpsyt.2024.1377268](https://doi.org/10.3389/fpsyt.2024.1377268) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span> | [Li_2017_Kv](drugs/drug_fenofibrate/pd_Li_2017_Kv.md) | Kv current ← fenofibrate · direct sigmoid Emax (Hill) effect | — | Li H et al., The PPARα activator fenofibrate inhibit…, European journal of pharmac… (2017) | [10.1016/j.ejphar.2017.07.027](https://doi.org/10.1016/j.ejphar.2017.07.027) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **APOA1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Aslibekyan_2012](drugs/drug_fenofibrate/pgx_Aslibekyan_2012_APOA1_Q100.md) | Aslibekyan S et al., Variants identified in a GWAS meta-anal…, PloS one (2012) | [10.1371/journal.pone.0048663](https://doi.org/10.1371/journal.pone.0048663) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **APOC1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Aslibekyan_2012](drugs/drug_fenofibrate/pgx_Aslibekyan_2012_APOC1_Q100.md) | Aslibekyan S et al., Variants identified in a GWAS meta-anal…, PloS one (2012) | [10.1371/journal.pone.0048663](https://doi.org/10.1371/journal.pone.0048663) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **APOC2** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Aslibekyan_2012](drugs/drug_fenofibrate/pgx_Aslibekyan_2012_APOC2_Q100.md) | Aslibekyan S et al., Variants identified in a GWAS meta-anal…, PloS one (2012) | [10.1371/journal.pone.0048663](https://doi.org/10.1371/journal.pone.0048663) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **APOC4** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Aslibekyan_2012](drugs/drug_fenofibrate/pgx_Aslibekyan_2012_APOC4_Q100.md) | Aslibekyan S et al., Variants identified in a GWAS meta-anal…, PloS one (2012) | [10.1371/journal.pone.0048663](https://doi.org/10.1371/journal.pone.0048663) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **APOE** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Aslibekyan_2012](drugs/drug_fenofibrate/pgx_Aslibekyan_2012_APOE_Q100.md) | Aslibekyan S et al., Variants identified in a GWAS meta-anal…, PloS one (2012) | [10.1371/journal.pone.0048663](https://doi.org/10.1371/journal.pone.0048663) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CETP** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Aslibekyan_2012](drugs/drug_fenofibrate/pgx_Aslibekyan_2012_CETP_Q100.md) | Aslibekyan S et al., Variants identified in a GWAS meta-anal…, PloS one (2012) | [10.1371/journal.pone.0048663](https://doi.org/10.1371/journal.pone.0048663) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CILP2** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Aslibekyan_2012](drugs/drug_fenofibrate/pgx_Aslibekyan_2012_CILP2_Q100.md) | Aslibekyan S et al., Variants identified in a GWAS meta-anal…, PloS one (2012) | [10.1371/journal.pone.0048663](https://doi.org/10.1371/journal.pone.0048663) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **FLJ36070** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Aslibekyan_2012](drugs/drug_fenofibrate/pgx_Aslibekyan_2012_FLJ36070_Q100.md) | Aslibekyan S et al., Variants identified in a GWAS meta-anal…, PloS one (2012) | [10.1371/journal.pone.0048663](https://doi.org/10.1371/journal.pone.0048663) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **MOSC1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Aslibekyan_2012](drugs/drug_fenofibrate/pgx_Aslibekyan_2012_MOSC1_Q100.md) | Aslibekyan S et al., Variants identified in a GWAS meta-anal…, PloS one (2012) | [10.1371/journal.pone.0048663](https://doi.org/10.1371/journal.pone.0048663) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **PDE3A** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Aslibekyan_2012](drugs/drug_fenofibrate/pgx_Aslibekyan_2012_PDE3A_Q100.md) | Aslibekyan S et al., Variants identified in a GWAS meta-anal…, PloS one (2012) | [10.1371/journal.pone.0048663](https://doi.org/10.1371/journal.pone.0048663) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **LFABP** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Brouillette_2004](drugs/drug_fenofibrate/pgx_Brouillette_2004_LFABP_Q100.md) | Brouillette C et al., Effect of liver fatty acid binding prot…, Journal of human genetics (2004) | [10.1007/s10038-004-0171-2](https://doi.org/10.1007/s10038-004-0171-2) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **PPARA** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Brouillette_2004](drugs/drug_fenofibrate/pgx_Brouillette_2004_PPARA_Q100.md) | Brouillette C et al., Effect of liver fatty acid binding prot…, Journal of human genetics (2004) | [10.1007/s10038-004-0171-2](https://doi.org/10.1007/s10038-004-0171-2) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by qwen3.8:27b-mtp-q8_0, p(non-human) 1.00).">mouse</span> | **PPARA** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Lalloyer_2011](drugs/drug_fenofibrate/pgx_Lalloyer_2011_PPARA_Q100.md) | Lalloyer F et al., Peroxisome proliferator-activated recep…, Arteriosclerosis, thrombosi… (2011) | [10.1161/ATVBAHA.110.220525](https://doi.org/10.1161/ATVBAHA.110.220525) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **SCARB1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Liu_2008](drugs/drug_fenofibrate/pgx_Liu_2008_SCARB1_Q100.md) | Liu Y et al., The SCARB1 gene is associated with lipi…, Journal of human genetics (2008) | [10.1007/s10038-008-0302-2](https://doi.org/10.1007/s10038-008-0302-2) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **PPARA** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Morieri_2020](drugs/drug_fenofibrate/pgx_Morieri_2020_PPARA_Q100.md) | Morieri ML et al., PPARA Polymorphism Influences the Cardi…, Diabetes (2020) | [10.2337/db19-0973](https://doi.org/10.2337/db19-0973) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **unknown** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Smith_2008](drugs/drug_fenofibrate/pgx_Smith_2008_unknown_Q100.md) | Smith JA et al., The genetic architecture of fasting pla…, European journal of human g… (2008) | [10.1038/sj.ejhg.5202003](https://doi.org/10.1038/sj.ejhg.5202003) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **MACROD2** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | unknown | [Yang_2018](drugs/drug_fenofibrate/pgx_Yang_2018_MACROD2_Q100.md) | Yang HC et al., Homozygosity disequilibrium associated…, BMC proceedings 12(Suppl 9)… (2018) | [10.1186/s12919-018-0150-9](https://doi.org/10.1186/s12919-018-0150-9) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=fenofibrate).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | kidney | `UGT1A9` substrate | DrugBank actor |
| metabolism | liver | `CES1` substrate, `CYP2A6` inhibitor, `CYP2C19` inhibitor, `CYP2C8` inhibitor, `CYP2C9` inhibitor, `UGT1A9` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | liver | `ABCB11` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: AKR1B1 (substrate), AKR1C1 (substrate), AKR1C2 (substrate), AKR1C3 (substrate), APOA1 (target), APOC1 (target), APOC2 (target), APOC4 (target), APOE (target), CBR1 (substrate), CETP (target), CILP2 (target), FLJ36070 (target), LFABP (target), MACROD2 (unknown), MMP25 (inhibitor), MOSC1 (target), NR1I2 (partial agonist), PDE3A (target), PPARA (target), SCARB1 (target), UNKNOWN (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:09 | 50:41 | 2/0/0 | 1/0/0 | 0/0/17 | 974,531/76,242 | ollama / qwen3.8:27b-mtp-q8_0 | 58 | 10/41 | 54/4 | 0 |

## Coverage

- **PubMed hits:** 258 matched, 151 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 2  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Xu_2014.pdf` | Xu Y et al., Study on the release of fenofibrate nan…, Drug development and indust… (2014) | popPK | 8 | [10.3109/03639045.2013.794828](https://doi.org/10.3109/03639045.2013.794828) | [23692349](https://pubmed.ncbi.nlm.nih.gov/23692349) | The study reports in vivo PK in rats using a one-compartment model, but specific numeric parameter values (CL, V, t1/2) are not present in the provided text, only correlation equations. |
| `Yun_2006.pdf` | Yun HY et al., The effects of food on the bioavailabil…, Clinical pharmacokinetics (2006) | popPK | 8 | [10.2165/00003088-200645040-00007](https://doi.org/10.2165/00003088-200645040-00007) | [16584288](https://pubmed.ncbi.nlm.nih.gov/16584288) | The study reports PK parameters for fenofibrate (specifically its metabolite fenofibric acid) in humans, but the evidence only provides fold-changes in AUC and Cmax, lacking specific numeric values for clearance, volume, or half-life. |

<sub>queue written 2026-10-07 10:36 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ali_2026 | irrelevant | 0 | 0 | The study focuses on the synthesis and biological evaluation of novel PPAR agonists, using fenofibrate only as a reference compound for PPARα activity, with no pharmacokinetic data reported. |
| PGx | Bigo_2014 | not_relevant | 0 | 0 | The study investigates the effect of fenofibrate on bilirubin metabolism in cell lines but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Cambruzzi_2019 | not_relevant | 0 | 0 | The paper is a review of lipoprotein glomerulopathy pathogenesis and treatment, mentioning fenofibrate as a therapy but not reporting any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Chan_2008 | irrelevant | 0 | 0 | The study investigates the kinetics of VLDL-apolipoprotein C-III, not the pharmacokinetic parameters (CL, V, ka) of fenofibrate itself. |
| popPK | Chan_2009 | irrelevant | 0 | 0 | The study measures the kinetics of HDL particles (LpA-I, LpA-I:A-II) and apolipoproteins, not the pharmacokinetic disposition parameters (CL, V, ka) of the drug fenofibrate itself. |
| popPK | Chen_2019 | irrelevant | 0 | 0 | The paper describes a chemical synthesis method for radiolabeling and does not report pharmacokinetic parameters for fenofibrate. |
| popPK | Cox_2018 | irrelevant | 0 | 0 | The paper is a genome-wide methylation QTL (meQTL) study investigating genetic drivers of epigenetic changes in response to fenofibrate, and it does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life) for the drug. |
| PGx | Crespo_2016 | not_relevant | 0 | 0 | The paper studies fish biomarkers and in vitro enzyme inhibition, not human pharmacogenomics or PK/PD parameters of fenofibrate. |
| PGx | Dai_2026 | not_relevant | 0 | 0 | The paper discusses fenofibrate only as a candidate for drug repurposing based on genetic correlations, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Dos_2024 | irrelevant | 0 | 0 | The study is an ecotoxicological assessment of mixture effects on bacteria, not a pharmacokinetic study, and reports no disposition parameters for fenofibrate. |
| popPK | EFSA_2020 | irrelevant | 0 | 0 | The paper is a risk assessment for perfluoroalkyl substances (PFASs) and does not contain any pharmacokinetic data for fenofibrate. |
| PGx | Elshenawy_2013 | not_relevant | 0 | 0 | The paper studies the expression of drug metabolizing enzymes in a cell line model and does not report any pharmacogenomic effects on fenofibrate PK or PD parameters. |
| PGx | Fisher_2007 | not_relevant | 0 | 0 | The study analyzes the association between the FABP1 T94A polymorphism and baseline lipid levels in a general population cohort, not the pharmacokinetic or pharmacodynamic response to fenofibrate treatment. |
| PGx | Galano_2022 | not_relevant | 0 | 0 | The paper reports a genetic variant (SCP2) causing a disease phenotype and notes that fenofibrate treatment increases protein levels in fibroblasts, but it does not report a pharmacogenomic effect of the variant on the pharmacokinetics or pharmacodynamics of fenofibrate itself. |
| popPK | Geci_2026 | irrelevant | 0 | 0 | The paper is a review/methodological study on DILI prediction using a dataset of 241 drugs, and fenofibrate is not identified as the subject drug nor are its specific PK parameters reported. |
| PGx | Golledge_2023 | not_relevant | 0 | 0 | The paper is a review of abdominal aortic aneurysm pathogenesis and management, and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of fenofibrate. |
| popPK | Hassan_2021 | irrelevant | 0 | 0 | The study focuses on the synthesis and biological evaluation of novel PPARα agonists, using fenofibrate only as a comparator for efficacy and not reporting any pharmacokinetic parameters for it. |
| popPK | Hassan_2022 | irrelevant | 0 | 0 | The study focuses on the synthesis and pharmacological activity of novel quinazolinone-fibrate hybrids, using fenofibrate only as a comparator for PPARα agonistic activity, with no pharmacokinetic parameters reported. |
| popPK | Hernando_2004 | irrelevant | 0 | 0 | The paper describes an analytical method for detecting fenofibrate in wastewater and its toxicity to Daphnia magna, not a pharmacokinetic study in humans or animals. |
| PGx | Holm_2018 | not_relevant | 0 | 0 | The paper investigates sphingolipid metabolism in type 1 diabetes and uses fenofibrate as a therapeutic agent in mice, but does not report pharmacogenomic effects on fenofibrate's PK or PD parameters. |
| PGx | Hu_2014 | not_relevant | 0 | 0 | The paper reports clinical outcomes (remission, survival) of fenofibrate in patients with a specific APOE mutation, but does not report pharmacokinetic or pharmacodynamic parameter changes (e.g., AUC, Cmax, receptor binding) attributable to the genotype. |
| popPK | Huang_2023 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for the monoclonal antibody VRC01, not fenofibrate (which is only mentioned as a comparator in the introduction). |
| popPK | Jang_2026 | irrelevant | 2 | 1 | This is a bioequivalence study comparing formulations of a combination drug, reporting only geometric mean ratios and descriptive statistics (Cmax, AUC) rather than absolute disposition parameters (CL, V, ka) for fenofibrate. |
| PGx | Januszewski_2026 | not_relevant | 0 | 0 | The paper reports associations between a PPARα variant and clinical outcomes (vascular events, mortality), not pharmacokinetic or pharmacodynamic parameters of fenofibrate. |
| popPK | Jiao_2009 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for sirolimus, not fenofibrate. |
| PGx | Kabagambe_2009 | not_relevant | 0 | 0 | The study examines the association between TCF7L2 genotypes and inflammatory markers (PD of inflammation), not the pharmacokinetic or pharmacodynamic parameters of fenofibrate itself (e.g., lipid levels or drug concentration). |
| PGx | Kajosaari_2005 | not_relevant | 0 | 0 | The paper investigates the effect of fenofibrate as an inhibitor on repaglinide metabolism in vitro, not the effect of a gene variant on fenofibrate's PK/PD. |
| popPK | Kakara_2014 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of statins (atorvastatin, pitavastatin, rosuvastatin) and ezetimibe, with no mention of fenofibrate or its pharmacokinetic parameters. |
| PGx | Karlgren_2012 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (inhibition of OATP1B1 by fenofibrate) and does not report pharmacogenomic effects (gene variants) on fenofibrate's PK/PD. |
| popPK | Kasai_2008 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of E3030, using fenofibrate only as a reference comparator without reporting any pharmacokinetic parameters for it. |
| PGx | Kent_2017 | not_relevant | 0 | 0 | The study investigates the effect of fenofibrate on CYP2D6 expression in transgenic mice and hepatocytes, but does not report any pharmacogenomic effect (gene variant/genotype) on fenofibrate's PK or PD parameters. |
| PGx | Kim_2003 | not_relevant | 0 | 0 | The paper describes a drug-drug interaction between fenofibrate and warfarin, not a pharmacogenomic effect on fenofibrate's PK or PD parameters. |
| popPK | Kpanou_2021 | irrelevant | 0 | 0 | The paper is a computational study on deep learning models for predicting drug-drug interactions and does not report any pharmacokinetic parameters for fenofibrate. |
| popPK | Kuwabara_2004 | irrelevant | 0 | 0 | The study focuses on a novel PPAR-alpha agonist (NS-220) in mice, using fenofibrate only as a comparator for efficacy, with no pharmacokinetic parameters reported for fenofibrate. |
| popPK | Laville_2004 | irrelevant | 0 | 0 | The study is an in vitro toxicity assessment of fenofibrate on fish hepatocytes, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Ledl_2005 | not_relevant | 0 | 0 | The paper is a case report of a drug-drug interaction (fenofibrate and rosiglitazone) causing myopathy, and explicitly states that no functional limitations associated with CYP450 polymorphisms were detected. |
| popPK | Lee_2025 | relevant | 4 | 5 | The study reports non-compartmental PK parameters (AUC, t1/2) for fenofibric acid (the active metabolite of fenofibrate) in humans, but lacks compartmental model parameters (CL, V, Q) and specific Cmax values are not explicitly listed in the provided text (only GMRs). |
| popPK | Lentz_2021 | irrelevant | 2 | 0 | The study focuses on in vitro dissolution and permeation modeling to predict bioavailability, rather than reporting quantitative population pharmacokinetic parameters (CL, V, ka) for fenofibrate. |
| popPK | Li_2017 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of fenofibrate's effect on ion channels, not a pharmacokinetic study. |
| PGx | Liu_2014 | not_relevant | 2 | 5 | The study reports that ABCD2 genotype does not alter the pharmacodynamic effects of fenofibrate on obesity or lipid phenotypes in mice. |
| PGx | Liu_2025 | not_relevant | 0 | 0 | The paper investigates the causal link between hypercholesterolemia and COPD using Mendelian randomization and identifies fenofibrate as a potential therapeutic target via bioinformatics, but it does not report any pharmacogenomic effects on the pharmacokinetic or pharmacodynamic parameters of fenofibrate. |
| popPK | Mejdrová_2023 | irrelevant | 0 | 0 | The paper describes the discovery of novel CAR agonists and does not report pharmacokinetic parameters for fenofibrate. |
| popPK | Melariri_2015 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of tafenoquine (TQ) in mice, not fenofibrate. |
| PGx | Miller_1998 | not_relevant | 0 | 0 | The paper is a general review of fibrate pharmacokinetics and does not report any specific gene variants or pharmacogenomic effects on fenofibrate. |
| popPK | Minichmayr_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of bevacizumab, with fenofibrate only mentioned as a co-administered drug in the treatment regimen. |
| PGx | Morieri_2022 | not_relevant | 2 | 0 | The paper is a review that mentions a study on LPL variants and fenofibrate cardiovascular effectiveness, but it does not report specific pharmacokinetic or pharmacodynamic parameter changes or fitted effect sizes. |
| popPK | Moxon_2020 | irrelevant | 0 | 0 | The study is a clinical trial assessing pathological outcomes (OPN, macrophages) and does not report pharmacokinetic parameters for fenofibrate. |
| PGx | Nakajima_2022 | not_relevant | 0 | 0 | The paper reports a clinical case of Alagille syndrome (JAG1 variant) and discusses the efficacy of fenofibrate in treating dyslipidemia, but it does not report a pharmacogenomic effect of a specific gene variant on the pharmacokinetic or pharmacodynamic parameters of fenofibrate itself. |
| PGx | Nishimura_2008 | not_relevant | 0 | 0 | The paper investigates the mechanism of fenofibrate-induced hepatocarcinogenesis in rats via oxidative stress and gene expression changes, but does not report pharmacogenomic effects on PK or PD parameters. |
| PGx | Nogueira-Recalde_2019 | not_relevant | 0 | 0 | The paper investigates the therapeutic efficacy of fenofibrate on osteoarthritis and senescence, but does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Ooi_2012 | irrelevant | 0 | 0 | The study measures the kinetics of VLDL-apoE (a protein) rather than the pharmacokinetic parameters (CL, V, ka) of the drug fenofibrate itself. |
| popPK | Parrot_2026 | irrelevant | 0 | 0 | The paper is a review on nanoparticle pharmacokinetics and does not report any data for fenofibrate. |
| popPK | Patiño-Rodríguez_2015 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of atorvastatin (ATO) to assess interaction with fenofibrate, and explicitly states that unchanged fenofibrate is not detected in blood, so no quantitative PK parameters for fenofibrate are reported. |
| PGx | Penzak_2002 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions between protease inhibitors and fenofibrate, not pharmacogenomic effects of gene variants on fenofibrate PK/PD. |
| popPK | Pinchbeck_2018 | irrelevant | 0 | 0 | The study is a clinical trial assessing the efficacy of fenofibrate on abdominal aortic aneurysm biomarkers and does not report pharmacokinetic parameters (CL, V, ka, etc.). |
| PGx | Prasad_2016 | not_relevant | 0 | 0 | The paper studies the inhibition of meloxicam metabolism by fenofibrate in a fungal model, not the effect of a gene variant on fenofibrate's PK/PD. |
| PGx | Prueksaritanont_2002 | not_relevant | 0 | 0 | The study investigates drug-drug interactions between fibrates and statins in hepatocytes, not the effect of a gene variant on fenofibrate pharmacokinetics or pharmacodynamics. |
| PGx | Puligheddu_2017 | not_relevant | 0 | 0 | The paper investigates the therapeutic efficacy of fenofibrate in epilepsy, not how genetic variants affect the pharmacokinetics or pharmacodynamics of fenofibrate itself. |
| PGx | Raini_2021 | not_relevant | 0 | 0 | The paper investigates the antiviral mechanism of PF-429242 against Zika virus and mentions fenofibrate only as a tool compound to inhibit lipid droplet formation, without reporting any pharmacogenomic effects on fenofibrate's PK or PD parameters. |
| PGx | Rasouli_2012 | not_relevant | 2 | 0 | The paper investigates genetic modulation of gene expression and insulin sensitivity (PD) but does not report pharmacokinetic parameters or specific quantitative pharmacodynamic effect sizes for fenofibrate. |
| popPK | Rosal_2010 | irrelevant | 0 | 0 | The paper is an ecotoxicity study measuring acute toxicity (EC50) in aquatic organisms, not a pharmacokinetic study reporting disposition parameters for fenofibrate. |
| popPK | Sadler_2025 | irrelevant | 0 | 0 | The paper is a pharmacogenetic study of statins, metformin, and antihypertensives, and does not report pharmacokinetic parameters for fenofibrate. |
| PGx | Schelleman_2014 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (fenofibrate with sulfonylureas) and CYP inhibition, but does not report any pharmacogenomic effects (gene variants) on fenofibrate's PK or PD parameters. |
| PGx | Sedova_2004 | not_relevant | 2 | 5 | The study investigates the response of a specific inbred rat strain (PD/Cub) to fenofibrate, which is a pharmacogenetic model study in animals, not a human pharmacogenomic study linking specific gene variants to PK/PD parameters. |
| popPK | Shah_2025 | irrelevant | 0 | 0 | The paper is a review on machine learning for predicting food effects and does not report original quantitative pharmacokinetic parameters for fenofibrate. |
| popPK | Sharma_2024 | irrelevant | 0 | 0 | The paper is a data mining study on OXPHOS inhibitors for ovarian cancer and does not report pharmacokinetic parameters for fenofibrate. |
| popPK | Somogyi-Végh_2019 | irrelevant | 0 | 0 | The paper is a retrospective analysis of drug-drug interaction prevalence in pharmacy dispensing data and does not report any pharmacokinetic parameters for fenofibrate. |
| popPK | Sperry_2023 | irrelevant | 0 | 0 | The paper focuses on statins and their effects on COVID-19 mortality and viral inhibition, with no mention of fenofibrate or its pharmacokinetics. |
| popPK | Struemper_2025 | irrelevant | 0 | 0 | The paper describes a tumor size–overall survival modeling framework for non-small cell lung cancer and does not contain any pharmacokinetic data for fenofibrate. |
| PGx | Tamada_2009 | not_relevant | 0 | 0 | The paper describes a computational method for identifying autocrine pathways in transcriptome networks using fenofibrate as a case study, but it does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Tintle_2018 | not_relevant | 0 | 0 | The paper is a methodological overview of a workshop (GAW20) and does not report specific pharmacogenomic effect sizes or results for fenofibrate. |
| PGx | Tojcic_2009 | not_relevant | 2 | 5 | The study reports in vitro enzyme kinetics and notes that common genetic variants did not significantly alter FA glucuronidation rates in liver microsomes, failing to demonstrate a significant pharmacogenomic effect on PK parameters. |
| PGx | Tuteja_2014 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (lomitapide) and does not report pharmacogenomic effects (gene variants) on fenofibrate PK/PD. |
| PGx | Večeřa_2011 | not_relevant | 0 | 0 | The paper investigates the effect of fenofibrate on CYP enzyme expression (drug-drug interaction mechanism) in rats, not the effect of a genetic variant on fenofibrate's PK or PD. |
| PGx | Wakelee_2012 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (bexarotene affecting atorvastatin/fenofibrate PK), not a pharmacogenomic effect (gene variant/genotype) on fenofibrate. |
| PGx | Wang_2015 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (silybin inhibiting fenofibrate's PPARα activation) rather than a pharmacogenomic effect (gene variant/genotype) on fenofibrate's PK or PD. |
| popPK | Watts_2003 | irrelevant | 0 | 0 | The study investigates the kinetics of apolipoproteins (apoAI and apoB) rather than the pharmacokinetic parameters (CL, V, ka) of fenofibrate itself. |
| popPK | Wei_2018 | irrelevant | 0 | 0 | The paper is an epigenomic study examining DNA methylation associations with triglyceride levels, not a pharmacokinetic study, and contains no PK parameters for fenofibrate. |
| popPK | Wiel_2005 | irrelevant | 0 | 0 | The study investigates the protective effects of fenofibrate on endothelium and hemostasis in a shock model, reporting no pharmacokinetic parameters. |
| popPK | Wilk_2023 | irrelevant | 0 | 0 | The paper is a computational drug repurposing study for polycystic kidney disease and does not contain any pharmacokinetic data for fenofibrate. |
| popPK | Wu_2021 | irrelevant | 0 | 0 | The paper describes a method for detecting drug-drug interactions using electronic health records and does not report any pharmacokinetic parameters for fenofibrate. |
| popPK | Xu_2006 | irrelevant | 1 | 0 | The study is a mechanistic investigation of myocardial protection in pigs and does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for fenofibrate. |
| popPK | Xu_2014 | relevant | 8 | 2 | The study reports in vivo PK in rats using a one-compartment model, but specific numeric parameter values (CL, V, t1/2) are not present in the provided text, only correlation equations. |
| popPK | Yadav_2026 | irrelevant | 0 | 0 | The paper describes a chromatographic assay method for fenofibrate tablets and does not report any pharmacokinetic parameters. |
| PGx | Yamazaki_2005 | not_relevant | 0 | 0 | The paper investigates in vitro transporter inhibition by fenofibrate but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Yu_2016 | irrelevant | 0 | 0 | The study focuses on the mechanism of berberine as a PPARalpha agonist, using fenofibrate only as a comparator drug without reporting any pharmacokinetic parameters for fenofibrate. |
| popPK | Yun_2006 | relevant | 8 | 2 | The study reports PK parameters for fenofibrate (specifically its metabolite fenofibric acid) in humans, but the evidence only provides fold-changes in AUC and Cmax, lacking specific numeric values for clearance, volume, or half-life. |
| PGx | Zaja_2016 | not_relevant | 0 | 0 | The paper characterizes the ABCG2 transporter in rainbow trout and notes fenofibrate as an activator, but it does not report a pharmacogenomic effect of a human gene variant on fenofibrate PK or PD parameters. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for aripiprazole, not fenofibrate. |
| popPK | Zhang_2024_2 | irrelevant | 0 | 0 | The paper is a pharmacovigilance study on PDE5 inhibitors (sildenafil, tadalafil, etc.) and does not involve fenofibrate or report its pharmacokinetic parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfenofibrate%5D&body=Drug%3A%20fenofibrate%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_fenofibrate/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 10:36 UTC</sub>
