<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;glimepiride&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Glimepiride_Yoo2020v2_reference&quot;,&quot;label&quot;:&quot;Yoo_2020_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_glimepiride/Glimepiride_Yoo2020v2_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# glimepiride

- **generic name:** glimepiride
- **ATC codes:** `A10BB12`, `A10BD04`, `A10BD06`
- **DrugBank:** [DB00222](https://go.drugbank.com/drugs/DB00222) · **PubChem:** [CID 3476](https://pubchem.ncbi.nlm.nih.gov/compound/3476)
- **molar mass:** 490.62 g/mol (C24H34N4O5S) — DrugBank
- **groups:** approved, investigational

## About

Glimepiride is a sulfonylurea medicine used to lower blood sugar in people with diabetes. It is an approved drug, widely used as an oral diabetes treatment, and is also available in combination products with other glucose-lowering medicines.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q106029845](https://www.wikidata.org/wiki/Q106029845) and the WHO ATC classification; not checked by a person.</small>

## Start here

> **Yoo_2020_2_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> review reference. [Run it in the simulator](drugs/drug_glimepiride/Glimepiride_Yoo2020v2_reference.md?tab=Simulation) · [record](drugs/drug_glimepiride/Glimepiride_Yoo2020v2_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL/F | 45.6 | L/h | 45.6 L/h | review reference | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Yoo_2020_2_reference](drugs/drug_glimepiride/Glimepiride_Yoo2020v2_reference.md) |
| V | V/F | 1868 | L | 1868.3478 L | review reference | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Yoo_2020_2_reference](drugs/drug_glimepiride/Glimepiride_Yoo2020v2_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: unreported model parameter default(s): ka</sub> | [Yoo_2020_2_reference](drugs/drug_glimepiride/Glimepiride_Yoo2020v2_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Yoo H et al., Pharmacokinetic/Pharmacodynamic Interac…, Drug design, development an… (2020) | [10.2147/DDDT.S275343](https://doi.org/10.2147/DDDT.S275343) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">human + animal</span> | [Mele_2014_KATP_channel_current_in_EDL](drugs/drug_glimepiride/pd_Mele_2014_KATP_channel_current_in_EDL.md) | KATP channel current in EDL ← glimepiride · direct sigmoid Emax (Hill) effect | model (no simulator) | Mele A et al., Database search of spontaneous reports…, Pharmacology research & per… (2014) | [10.1002/prp2.28](https://doi.org/10.1002/prp2.28) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">human + animal</span> | [Mele_2014_KATP_channel_current_in_FDB](drugs/drug_glimepiride/pd_Mele_2014_KATP_channel_current_in_FDB.md) | KATP channel current in FDB ← glimepiride · direct sigmoid Emax (Hill) effect | model (no simulator) | Mele A et al., Database search of spontaneous reports…, Pharmacology research & per… (2014) | [10.1002/prp2.28](https://doi.org/10.1002/prp2.28) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">human + animal</span> | [Mele_2014_KATP_channel_current_in_SOL](drugs/drug_glimepiride/pd_Mele_2014_KATP_channel_current_in_SOL.md) | KATP channel current in SOL ← glimepiride · direct sigmoid Emax (Hill) effect | model (no simulator) | Mele A et al., Database search of spontaneous reports…, Pharmacology research & per… (2014) | [10.1002/prp2.28](https://doi.org/10.1002/prp2.28) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">human + animal</span> | [Mele_2014_protein_content_muscle_weight_in_EDL](drugs/drug_glimepiride/pd_Mele_2014_protein_content_muscle_weight_in_EDL.md) | protein content/muscle weight in EDL ← glimepiride · direct sigmoid Emax (Hill) effect | model (no simulator) | Mele A et al., Database search of spontaneous reports…, Pharmacology research & per… (2014) | [10.1002/prp2.28](https://doi.org/10.1002/prp2.28) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">human + animal</span> | [Mele_2014_protein_content_muscle_weight_in_FDB](drugs/drug_glimepiride/pd_Mele_2014_protein_content_muscle_weight_in_FDB.md) | protein content/muscle weight in FDB ← glimepiride · direct sigmoid Emax (Hill) effect | model (no simulator) | Mele A et al., Database search of spontaneous reports…, Pharmacology research & per… (2014) | [10.1002/prp2.28](https://doi.org/10.1002/prp2.28) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Adverse-reaction risk allele; no quantitative PK/PD parameter effect.">safety allele</span> | **CYP2C9** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Azhar_2025](drugs/drug_glimepiride/pgx_Azhar_2025_CYP2C9_safety.md) | Azhar M et al., The Clinical Pharmacokinetics and Pharm…, Pharmaceuticals (Basel, Swi… (2025) | [10.3390/ph18010122](https://doi.org/10.3390/ph18010122) |
| <span class="pk-badge pk-badge--neutral" title="Adverse-reaction risk allele; no quantitative PK/PD parameter effect.">safety allele</span> | **CYP2C9** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Wolthuis_2024](drugs/drug_glimepiride/pgx_Wolthuis_2024_CYP2C9_safety.md) | Wolthuis David F G J et al., Dutch Pharmacogenetics Working Group (D…, European journal of human g… (2024) | [10.1038/s41431-024-01769-7](https://doi.org/10.1038/s41431-024-01769-7) |
| <span class="pk-badge pk-badge--neutral" title="Adverse-reaction risk allele; no quantitative PK/PD parameter effect.">safety allele</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8:27b-mtp-q8_0, p(non-human) 1.00).">in vitro</span> | **CYP2C9** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Yang_2018](drugs/drug_glimepiride/pgx_Yang_2018_CYP2C9_safety.md) | Yang F et al., CYP2C9 and OATP1B1 genetic polymorphism…, Scientific reports (2018) | [10.1038/s41598-018-29351-4](https://doi.org/10.1038/s41598-018-29351-4) |
| <span class="pk-badge pk-badge--neutral" title="Adverse-reaction risk allele; no quantitative PK/PD parameter effect.">safety allele</span> | **CYP2C9** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Zhang_2023](drugs/drug_glimepiride/pgx_Zhang_2023_CYP2C9_safety.md) | Zhang Q et al., Identification and in vitro functional…, Frontiers in endocrinology (2023) | [10.3389/fendo.2023.1139805](https://doi.org/10.3389/fendo.2023.1139805) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **ABCC8** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Ebid_2019](drugs/drug_glimepiride/pgx_Ebid_2019_ABCC8_Q100.md) | Ebid AIM et al., The influence of SLC22A1 rs622342 and A…, Journal of drug assessment (2019) | [10.1080/21556660.2019.1619571](https://doi.org/10.1080/21556660.2019.1619571) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **SLC22A1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [Ebid_2019](drugs/drug_glimepiride/pgx_Ebid_2019_SLC22A1_Q100.md) | Ebid AIM et al., The influence of SLC22A1 rs622342 and A…, Journal of drug assessment (2019) | [10.1080/21556660.2019.1619571](https://doi.org/10.1080/21556660.2019.1619571) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **SLCO1B1** | `Q27` · CL/F | transport | [Wolthuis_2024](drugs/drug_glimepiride/pgx_Wolthuis_2024_SLCO1B1_Q27.md) | Wolthuis David F G J et al., Dutch Pharmacogenetics Working Group (D…, European journal of human g… (2024) | [10.1038/s41431-024-01769-7](https://doi.org/10.1038/s41431-024-01769-7) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8:27b-mtp-q8_0, p(non-human) 1.00).">in vitro</span> | **OATP1B1** | `Q66` · Vmax | transport | [Yang_2018](drugs/drug_glimepiride/pgx_Yang_2018_OATP1B1_Q66.md) | Yang F et al., CYP2C9 and OATP1B1 genetic polymorphism…, Scientific reports (2018) | [10.1038/s41598-018-29351-4](https://doi.org/10.1038/s41598-018-29351-4) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=glimepiride).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `CYP2C9` safety_allele/substrate, `SLC22A1` transport, `SLCO1B1` transport | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | liver | `ABCB11` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ABCC8 (inducer), ABCC8 (target), ABCC9 (blocker), KCNJ1 (inhibitor), KCNJ11 (inhibitor), OATP1B1 (transport).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-22 14:23 | 41:04 | 1/0/0 | 1/0/0 | 4/0/4 | 689,683/17,668 | einfracz / qwen3.8-27b | 51 | 4/28 | 41/1 | 0 |

## Coverage

- **PubMed hits:** 231 matched, 170 returned
- **screened:** 4  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_26 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Antonesi_2011.pdf` | Antonesi IM et al., Pharmacokinetic modeling of glimepiride…, Revista medico-chirurgicala… (2011) | popPK | 9 | not captured | [22046814](https://pubmed.ncbi.nlm.nih.gov/22046814) | The paper reports a compartmental PK model for glimepiride in humans, but specific numeric parameter values (CL, V, etc.) are not present in the provided evidence, likely residing in tables or results sections not fully extracted. |
| `Yoo_2011.pdf` | Yoo HD et al., Population pharmacokinetic analysis of…, European journal of clinica… (2011) | popPK | 9 | [10.1007/s00228-011-1035-2](https://doi.org/10.1007/s00228-011-1035-2) | [21476064](https://pubmed.ncbi.nlm.nih.gov/21476064) | The paper reports a population PK model for glimepiride, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence, only relative effects (1.60-fold). |
| `Niemi_2001_2.pdf` | Niemi M et al., Effect of gemfibrozil on the pharmacoki…, Clinical pharmacology and t… (2001) | popPK | 8 | [10.1067/mcp.2001.119723](https://doi.org/10.1067/mcp.2001.119723) | [11719730](https://pubmed.ncbi.nlm.nih.gov/11719730) | The study reports glimepiride pharmacokinetic data in humans with some quantitative values (half-life, AUC change) but lacks specific clearance or volume parameters required for robust population modeling. |
| `Viana_2018_2.pdf` | Viana ALM et al., Pharmacokinetics and pharmacodynamics o…, International journal of ph… (2018) | popPK | 8 | [10.1016/j.ijpharm.2018.10.050](https://doi.org/10.1016/j.ijpharm.2018.10.050) | [30359686](https://pubmed.ncbi.nlm.nih.gov/30359686) | Study reports PK of glimepiride in rats, but no numeric parameter values (CL, V, t1/2, etc.) are present in the provided text. |
| `Yun_2006.pdf` | Yun HY et al., Pharmacokinetic and pharmacodynamic mod…, Journal of clinical pharmac… (2006) | popPK | 6 | [10.1111/j.1365-2710.2006.00766.x](https://doi.org/10.1111/j.1365-2710.2006.00766.x) | [16958825](https://pubmed.ncbi.nlm.nih.gov/16958825) | The study reports a two-compartmental PK model for glimepiride in humans but only provides peak concentration and time to peak in the abstract, without explicit values for clearance, volume, or rate constants in the provided evidence. |
| `Mohsen_2017.pdf` | Mohsen AM et al., Enhanced oral bioavailability and susta…, Drug development and indust… (2017) | popPK | 5 | [10.1080/03639045.2017.1310224](https://doi.org/10.1080/03639045.2017.1310224) | [28330377](https://pubmed.ncbi.nlm.nih.gov/28330377) | The study evaluates the pharmacokinetics of glimepiride in rats and reports a 7-fold enhancement in bioavailability, but specific quantitative disposition parameters (CL, V, ka) are not present in the provided text. |
| `Zhou_2020.pdf` | Zhou D et al., Interaction of Organic Anion Transporte…, Journal of agricultural and… (2020) | pd | 5 | [10.1021/acs.jafc.9b05808](https://doi.org/10.1021/acs.jafc.9b05808) | [31760750](https://www.ncbi.nlm.nih.gov/pubmed/31760750) | metadata signals extractable PD data (IC50) |
| `Inoue_1995.pdf` | Inoue Y et al., Characterization of the binding sites f…, European journal of pharmac… (1995) | pd | 4 | [10.1016/0014-2999(95)00368-u](https://doi.org/10.1016/0014-2999(95)00368-u) | [8549639](https://www.ncbi.nlm.nih.gov/pubmed/8549639) | metadata signals extractable PD data (IC50) |
| `Müller_1998.pdf` | Müller G et al., Convergence and divergence of the signa…, Molecular medicine (Cambrid… (1998) | pd | 4 | not captured | [9642681](https://www.ncbi.nlm.nih.gov/pubmed/9642681) | metadata signals extractable PD data (EC50) |
| `Pandit_2017.pdf` | Pandit S et al., Evaluation of herb-drug interaction of…, Journal of ethnopharmacology (2017) | pd | 4 | [10.1016/j.jep.2016.07.061](https://doi.org/10.1016/j.jep.2016.07.061) | [27457692](https://www.ncbi.nlm.nih.gov/pubmed/27457692) | metadata signals extractable PD data (IC50) |
| `Rosati_1998.pdf` | Rosati B et al., Sulfonylureas blockade of neural and ca…, FEBS letters (1998) | pd | 4 | [10.1016/s0014-5793(98)01444-6](https://doi.org/10.1016/s0014-5793(98)01444-6) | [9862440](https://www.ncbi.nlm.nih.gov/pubmed/9862440) | metadata signals extractable PD data (IC50) |
| `Shao_2016.pdf` | Shao H et al., Metabolic Interaction Potential between…, Pharmacology (2016) | pd | 4 | [10.1159/000441230](https://doi.org/10.1159/000441230) | [26569597](https://www.ncbi.nlm.nih.gov/pubmed/26569597) | metadata signals extractable PD data (IC50) |
| `Cho_2011.pdf` | Cho HJ et al., Effect of genetic polymorphisms on the…, Clinica chimica acta; inter… (2011) | pgx | 8 | [10.1016/j.cca.2011.06.014](https://doi.org/10.1016/j.cca.2011.06.014) | [21704609](https://www.ncbi.nlm.nih.gov/pubmed/21704609) | metadata signals extractable PGX data (ABCC8, PK/PD-context) |
| `Gökalp_2011.pdf` | Gökalp O et al., Mild hypoglycaemic attacks induced by s…, European journal of clinica… (2011) | pgx | 8 | [10.1007/s00228-011-1078-4](https://doi.org/10.1007/s00228-011-1078-4) | [21691805](https://www.ncbi.nlm.nih.gov/pubmed/21691805) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Maekawa_2009.pdf` | Maekawa K et al., Substrate-dependent functional alterati…, Drug metabolism and disposi… (2009) | pgx | 8 | [10.1124/dmd.109.027003](https://doi.org/10.1124/dmd.109.027003) | [19541829](https://www.ncbi.nlm.nih.gov/pubmed/19541829) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Nagaya_2025.pdf` | Nagaya Y et al., In vitro-in vivo scaling of cytochrome…, Drug metabolism and disposi… (2025) | pgx | 8 | [10.1016/j.dmd.2025.100065](https://doi.org/10.1016/j.dmd.2025.100065) | [40199158](https://www.ncbi.nlm.nih.gov/pubmed/40199158) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Niemi_2002.pdf` | Niemi M et al., Glyburide and glimepiride pharmacokinet…, Clinical pharmacology and t… (2002) | pgx | 8 | [10.1067/mcp.2002.127495](https://doi.org/10.1067/mcp.2002.127495) | [12235454](https://www.ncbi.nlm.nih.gov/pubmed/12235454) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Shobha_2010.pdf` | Shobha JC et al., Interaction between voriconazole and gl…, Journal of postgraduate med… (2010) | pgx | 8 | [10.4103/0022-3859.62422](https://doi.org/10.4103/0022-3859.62422) | [20393255](https://www.ncbi.nlm.nih.gov/pubmed/20393255) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Suzuki_2006.pdf` | Suzuki K et al., Effect of CYP2C9 genetic polymorphisms…, Diabetes research and clini… (2006) | pgx | 8 | [10.1016/j.diabres.2005.09.019](https://doi.org/10.1016/j.diabres.2005.09.019) | [16325295](https://www.ncbi.nlm.nih.gov/pubmed/16325295) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Swen_2010.pdf` | Swen JJ et al., Effect of CYP2C9 polymorphisms on presc…, Pharmacogenomics (2010) | pgx | 8 | [10.2217/pgs.10.121](https://doi.org/10.2217/pgs.10.121) | [21121772](https://www.ncbi.nlm.nih.gov/pubmed/21121772) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Chen_2015.pdf` | Chen SZ et al., In vitro and in vivo drug-drug interact…, Pharmacology (2015) | pgx | 7 | [10.1159/000377637](https://doi.org/10.1159/000377637) | [25823852](https://www.ncbi.nlm.nih.gov/pubmed/25823852) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Surendran_2017.pdf` | Surendran S et al., A validated LC-MS/MS method for the est…, Journal of chromatography.… (2017) | pgx | 7 | [10.1016/j.jchromb.2017.01.009](https://doi.org/10.1016/j.jchromb.2017.01.009) | [28159531](https://www.ncbi.nlm.nih.gov/pubmed/28159531) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Chen_2014.pdf` | Chen SZ et al., Drug-drug interaction of losartan and g…, International journal of cl… (2014) | pgx | 5 | [10.5414/CP202071](https://doi.org/10.5414/CP202071) | [24986093](https://www.ncbi.nlm.nih.gov/pubmed/24986093) | metadata signals extractable PGX data (CYP2C9*1) |
| `Fokoun_2021.pdf` | Fokoun C et al., Pharmacogenetic-guided glimepiride ther…, The pharmacogenomics journal (2021) | pgx | 5 | [10.1038/s41397-021-00232-w](https://doi.org/10.1038/s41397-021-00232-w) | [33731883](https://www.ncbi.nlm.nih.gov/pubmed/33731883) | metadata signals extractable PGX data (CYP2C9) |
| `Kim_2007.pdf` | Kim YM et al., Identifying drugs needing pharmacogenet…, American journal of health-… (2007) | pgx | 5 | [10.2146/ajhp050490](https://doi.org/10.2146/ajhp050490) | [17215467](https://www.ncbi.nlm.nih.gov/pubmed/17215467) | metadata signals extractable PGX data (CYP2C9) |
| `Ragia_2022.pdf` | Ragia G et al., SLCO1B1 c.521T&gt;C gene polymorphism decr…, Drug metabolism and persona… (2022) | pgx | 5 | [10.1515/dmpt-2022-0131](https://doi.org/10.1515/dmpt-2022-0131) | [36169244](https://www.ncbi.nlm.nih.gov/pubmed/36169244) | metadata signals extractable PGX data (SLCO1B1) |

<sub>queue written 2026-10-22T14:20:17.255388+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abbasi_2025 | irrelevant | 0 | 0 | The study focuses on the synthesis and in-vitro enzyme inhibition (antidiabetic activity) of novel compounds, using glimepiride only as a standard reference for potency, not as a subject of pharmacokinetic analysis. |
| popPK | Abbasi_2025_2 | irrelevant | 0 | 0 | The study uses glimepiride only as a reference standard for in vitro enzyme inhibition assays and does not report pharmacokinetic parameters. |
| popPK | Abdelmoneim_2012 | irrelevant | 2 | 2 | The paper is a systematic review analyzing receptor selectivity (IC50) and tissue binding, not a primary pharmacokinetic study reporting quantitative disposition parameters (CL, V, ka) for glimepiride. |
| popPK | Ahmed_2022 | irrelevant | 1 | 2 | Study is primarily formulation/pharmacodynamic in diabetic rats; while it lists basic PK descriptors (t1/2, AUC), it lacks the specific disposition parameters (CL, V, ka, compartmental model) required. |
| popPK | Akhlaghi_2017_2 | irrelevant | 2 | 0 | This is a review article summarizing studies rather than reporting original quantitative PK parameters, and no specific numeric values for glimepiride are present in the evidence. |
| popPK | Antonesi_2011 | relevant | 9 | 0 | The paper reports a compartmental PK model for glimepiride in humans, but specific numeric parameter values (CL, V, etc.) are not present in the provided evidence, likely residing in tables or results sections not fully extracted. |
| popPK | Aoyama_2017 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for meloxicam, not glimepiride. |
| popPK | Badian_1996 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of the hydroxymetabolite (hydroxy-gli) after direct intravenous administration of the metabolite, not on the disposition of the parent drug glimepiride, and no PK parameters for glimepiride are provided. |
| popPK | Benaboud_2012 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for lamivudine, not glimepiride. |
| PGx | Cafferati_2025 | not_relevant | 0 | 0 | The paper tests glimepiride for in vitro modulation of the CRAT enzyme activity (a disease target), not for the effect of a gene variant on glimepiride's pharmacokinetic or pharmacodynamic parameters. |
| PGx | Chen_2014 | not_relevant | 4 | 10 | The study focuses on the drug-drug interaction (inhibition of losartan metabolism by glimepiride) rather than how a CYP2C9 genotype directly alters the PK or PD parameters of glimepiride itself. |
| PGx | Chen_2015 | not_relevant | 0 | 0 | The study evaluates drug-drug interactions (losartan and glimepiride) in rats, not the effect of a gene variant/genotype on glimepiride's pharmacokinetics. |
| popPK | Chen_2024 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for quetiapine, not glimepiride. |
| popPK | Cherney_2020 | irrelevant | 0 | 0 | The study investigates the renal effects of ertugliflozin using glimepiride only as a comparator drug, and reports no pharmacokinetic parameters for glimepiride. |
| PGx | Cho_2011 | not_relevant | 5 | 5 | The study reports no statistically significant association between the tested genetic polymorphisms and pharmacodynamic parameters of glimepiride. |
| popPK | Dawra_2019 | irrelevant | 2 | 1 | Glimepiride is a co-administered comparator agent in a drug-drug interaction study for ertugliflozin, and the text lacks explicit numeric PK parameter values (CL, V, ka) for glimepiride, referring instead to Figures and Tables not fully provided in the evidence. |
| popPK | Dias_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of vildagliptin in rats, not glimepiride. |
| popPK | Dinu_2025 | irrelevant | 0 | 0 | This is a review article discussing the therapeutic synergy of sulfonylureas and antioxidants for diabetes management, and it does not report any pharmacokinetic parameters for glimepiride. |
| popPK | Donaubauer_1993 | irrelevant | 1 | 0 | The paper describes toxicity studies in rats without reporting quantitative pharmacokinetic disposition parameters. |
| popPK | El_2025 | irrelevant | 0 | 0 | The paper reports in-vitro antiviral activity and docking scores for glimepiride, but contains no pharmacokinetic disposition parameters (CL, V, ka, etc.). |
| popPK | Elias_2025 | relevant | 9 | 4 | The study presents a PBPK model for glimepiride with quantitative PK parameters (half-life, AUC, Cmax, metabolite clearances) in the text, but specific fitted model parameters (CL, V, Q) are referenced as being in Supplementary Tables not provided. |
| popPK | Fediuk_2020 | irrelevant | 0 | 0 | The paper is a review of ertugliflozin pharmacokinetics where glimepiride is only mentioned as a co-administered comparator in a drug-drug interaction study, not the subject of PK analysis. |
| popPK | Fediuk_2021 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for ertugliflozin, while glimepiride is only mentioned as a concomitant medication in the context of glycemic rescue. |
| popPK | Fiaz_2023 | irrelevant | 0 | 0 | The study is an in-vitro investigation of nanomaterial synthesis and biological activity, not a pharmacokinetic study of glimepiride. |
| popPK | Filipiak_2000 | irrelevant | 0 | 0 | The paper is a review of cardiovascular pharmacodynamics and safety, not a pharmacokinetic study, and contains no quantitative PK parameters for glimepiride. |
| PGx | Fokoun_2021 | not_relevant | 2 | 0 | The paper is a cost-effectiveness modeling study that evaluates economic outcomes and hypoglycemia risk reduction, not a report of measured pharmacokinetic or pharmacodynamic parameters. |
| popPK | Gong_2026 | irrelevant | 0 | 0 | The paper is a review on AI and dosing timing that does not mention glimepiride or provide any pharmacokinetic parameters for it. |
| popPK | Gonzalez_2021 | irrelevant | 0 | 0 | The paper focuses on developing QSAR models for CYP2C9, CYP2D6, and CYP3A4 substrate and inhibitor prediction, and does not report specific pharmacokinetic parameters (CL, V, t1/2, etc.) for glimepiride. |
| PGx | Gronich_2024 | not_relevant | 0 | 0 | The paper investigates the clinical safety (hemolysis risk) of glimepiride in G6PD-deficient patients, not its pharmacokinetic or pharmacodynamic parameters. |
| PGx | Gökalp_2011 | not_relevant | 4 | 5 | The study reports an association between CYP variants and clinical hypoglycemia risk (adverse event) rather than a direct pharmacokinetic or pharmacodynamic parameter for glimepiride. |
| popPK | Hernández-Gago_2026 | irrelevant | 0 | 0 | The paper is a systematic review regarding dosing of high-alert medications in obese pediatric patients and does not report pharmacokinetic parameters for glimepiride. |
| PGx | Holstein_2011 | not_relevant | 5 | 3 | The study reports an association between CYP2C9 genotypes and drug dose adjustments, but does not provide fitted pharmacokinetic parameter estimates (e.g., AUC, Cmax) or quantitative effect sizes for glimepiride. |
| PGx | Holstein_2012 | not_relevant | 4 | 2 | The paper is a review that mentions glimepiride only to question its clinical justification due to unfavorable risk profiles and complex properties, but it does not report specific pharmacogenomic effects of gene variants on glimepiride's PK or PD parameters. |
| popPK | Hu_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of insulinotropic effects on isolated rat islets and does not report pharmacokinetic parameters for glimepiride. |
| popPK | Hu_2003 | irrelevant | 0 | 0 | The paper focuses on the pharmacodynamics and mechanisms of nateglinide, using glimepiride only as a comparator in receptor binding and channel closure kinetics (T1/2 on/off), not for disposition PK parameters (CL, V, ka). |
| popPK | Huang_2026 | irrelevant | 2 | 1 | The study is a methodological framework for drug-drug interactions using generic drugs (X and Y) or other examples (like cimetidine/imeglimin in refs), and glimepiride is only mentioned as a background clinical example without specific PK parameter estimation. |
| popPK | Inoue_1995 | irrelevant | 0 | 0 | The study characterizes in vitro binding sites for glibenclamide in rat liver membranes and reports displacement IC50s for glimepiride, which is a mechanistic/in-vitro study, not a pharmacokinetic study reporting disposition parameters (CL, V, etc.). |
| popPK | Kadokura_2014_2 | irrelevant | 0 | 0 | The paper is a review of ipragliflozin, where glimepiride is only mentioned as a comparator in drug-drug interaction studies without providing specific pharmacokinetic parameters for glimepiride. |
| popPK | Kasahara_2016 | irrelevant | 2 | 0 | Glimepiride is only a comparator drug in a study of tofogliflozin, and no quantitative PK parameters for glimepiride are provided in the evidence. |
| PD | Kasahara_2016 | not_relevant | 0 | 0 | The study evaluates drug-drug interactions on tofogliflozin's PK/PD and other drugs' PK, but does not report a concentration- or dose-response relationship for glimepiride. |
| popPK | Khanam_2006 | irrelevant | 0 | 0 | The study investigates the mechanism of action (potassium channel involvement) of sertraline and glimepiride on glucose levels and ileum tension in rats, reporting pA2 values rather than pharmacokinetic disposition parameters (CL, V, etc.) for glimepiride. |
| PD | Khanam_2006 | not_relevant | 3 | 2 | The paper reports pharmacodynamic parameters (pA2) for glimepiride in an isolated tissue assay (ileum relaxation), not an in vivo exposure-response or dose-response relationship for its hypoglycemic effect. |
| popPK | Ki_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of end-tidal CO2 on cerebral oxygen saturation in carotid endarterectomy patients and contains no data regarding glimepiride pharmacokinetics. |
| PGx | Kim_2007 | not_relevant | 1 | 2 | The paper identifies glimepiride as a candidate for pharmacogenetic monitoring based on CYP metabolism but does not report specific gene-variant effects on PK/PD parameters. |
| popPK | Kim_2012 | irrelevant | 4 | 0 | The study is a bioequivalence comparison reporting only geometric mean ratios and 95% CIs, without providing specific quantitative PK parameter values (CL, V, ka, t1/2) for glimepiride. |
| popPK | Koomen_2020 | irrelevant | 0 | 0 | The paper investigates dapagliflozin, a different drug from glimepiride, and contains no data for glimepiride. |
| popPK | Krause_1995 | irrelevant | 0 | 0 | The study investigates KATP channel properties in rat ventricular myocytes using glimepiride only as a pharmacological blocker, reporting IC50 values rather than pharmacokinetic disposition parameters. |
| PD | Krause_1995 | not_relevant | 0 | 0 | The paper studies KATP channel pharmacology in rat myocytes and does not report a pharmacodynamic or exposure-response relationship for glimepiride. |
| popPK | Landgraf_2000 | irrelevant | 0 | 0 | The paper is a review of meglitinide analogues (repaglinide, nateglinide) and mentions glimepiride only as a comparator for pharmacokinetic profiles without providing quantitative PK parameters for glimepiride. |
| popPK | Lang_2012 | irrelevant | 0 | 0 | The study is an in vitro pharmacogenomic analysis measuring IC50 values for KATP channel inhibition, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Li_2015 | irrelevant | 4 | 0 | This is a PBPK modeling study where glimepiride is one of seven comparator drugs, and no specific quantitative PK parameter values are provided in the extracted text, only general consistency with reported values. |
| popPK | Li_2016 | relevant | 9 | 2 | The study reports in-vivo pharmacokinetics (AUC, bioavailability) for glimepiride in rats, but the specific clearance, volume, or half-life values are not listed in the text or tables provided. |
| popPK | Liu_2016 | irrelevant | 0 | 0 | The paper is a synthetic chemistry study on novel compounds, where glimepiride is only used as a commercial reference/comparator for biological activity (IC50) and no pharmacokinetic parameters are reported. |
| popPK | Lo_2018 | irrelevant | 0 | 0 | This is a clinical review of efficacy and safety, not a pharmacokinetic study, and it does not report any quantitative disposition parameters for glimepiride. |
| PGx | Maekawa_2009 | not_relevant | 5 | 10 | The study is an in vitro expression system measuring enzyme kinetic parameters (Km, Vmax, intrinsic clearance) for CYP2C9 variants; it does not report in vivo pharmacokinetic (PK) or pharmacodynamic (PD) parameters for the drug. |
| popPK | Maheshwari_2019 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on PTP1B inhibitors where glimepiride is used only as a standard antidiabetic control, with no pharmacokinetic data reported. |
| popPK | Marcinak_2018 | irrelevant | 0 | 0 | The study focuses on the liver safety of fasiglifam, and glimepiride is only mentioned as an active comparator with no pharmacokinetic parameters reported. |
| popPK | Marshall_2021 | irrelevant | 0 | 0 | The study focuses exclusively on the pharmacokinetics of ertugliflozin, not glimepiride. |
| popPK | Mayer_2011 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on glimepiride's effects on adipocyte differentiation, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Mele_2014 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of drug effects on muscle atrophy, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Mohsen_2017 | relevant | 5 | 0 | The study evaluates the pharmacokinetics of glimepiride in rats and reports a 7-fold enhancement in bioavailability, but specific quantitative disposition parameters (CL, V, ka) are not present in the provided text. |
| popPK | Muddather_2026 | irrelevant | 0 | 0 | The paper is a review of DPP4 inhibitors (gliptins) in cancer and does not contain pharmacokinetic data for glimepiride. |
| PGx | Murthy_2013 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction between losartan and glimepiride in rats, not a pharmacogenomic effect mediated by a specific gene variant. |
| popPK | Müller_1996 | irrelevant | 0 | 0 | The study focuses on the molecular mechanism of action (in vitro and in vivo glucose metabolism) and does not report quantitative pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Müller_1998 | irrelevant | 0 | 0 | no_text gate: only 91 chars of text extracted (&lt; 400) |
| PD | Müller_1998 | not_relevant | 1 | 0 | The paper focuses on the signaling mechanisms of PIG-P and insulin, mentioning glimepiride only qualitatively as an agent that triggers tyrosine phosphorylation, without providing any numeric concentration-effect data or PD parameters for glimepiride. |
| popPK | Nagar_2024 | irrelevant | 0 | 0 | The paper is a mechanistic study on PBPK framework validation using general compounds (acids/bases) and does not report specific pharmacokinetic parameters for glimepiride. |
| PGx | Nagaya_2025 | not_relevant | 1 | 2 | The paper presents a general in vitro-in vivo scaling methodology (RAF method) using glimepiride only as one of several probe substrates; it does not report pharmacogenomic data on glimepiride PK/PD parameters. |
| popPK | Naik_2013 | irrelevant | 0 | 0 | The study focuses on the population pharmacokinetics and efficacy of the GPR40 agonist TAK-875; glimepiride is only mentioned as an active comparator in a meta-analysis simulation and its data were explicitly excluded from the PK analysis. |
| popPK | Neerati_2015 | relevant | 6 | 4 | The study measures glimepiride PK in rats and mentions parameters like AUMC and t1/2, but the full text provided only contains concentration-time data (Table 1) and lacks the specific numeric values for clearance, volume, or half-life. |
| PGx | Niemi_2000_2 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (rifampicin inducing CYP2C9) rather than a pharmacogenomic effect based on native genetic variation/genotype. |
| popPK | Niemi_2001_2 | relevant | 8 | 4 | The study reports glimepiride pharmacokinetic data in humans with some quantitative values (half-life, AUC change) but lacks specific clearance or volume parameters required for robust population modeling. |
| PGx | Niemi_2001_2 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction with gemfibrozil rather than a pharmacogenomic effect of a gene variant. |
| PGx | Noh_2011 | not_relevant | 0 | 0 | The paper describes an analytical method for measuring glimepiride and does not investigate the impact of genetic variants on pharmacokinetics or pharmacodynamics. |
| popPK | Ortiz-Pérez_2025 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological and molecular docking investigation of glimepiride as a carbonic anhydrase inhibitor, reporting no pharmacokinetic parameters. |
| popPK | Othman_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for linagliptin and cefixime, not glimepiride. |
| PGx | PMID36049896_2023 | not_relevant | 0 | 0 | The paper discusses G6PD genotype guidelines, likely for drugs like primaquine or dapsone, and does not mention glimepiride or its PK/PD parameters. |
| popPK | Pandit_2017 | irrelevant | 0 | 0 | The study is an in-vitro CYP450 inhibition assay using glimepiride only as a substrate in a cocktail, not a pharmacokinetic study of glimepiride. |
| PGx | Qin_2026 | not_relevant | 0 | 0 | The study investigates drug-drug interaction (alpinetin inhibiting CYP2C9) rather than pharmacogenomic effects of host genetic variants on glimepiride. |
| popPK | Quan_2025 | irrelevant | 0 | 0 | The study focuses on the preparation and physicochemical characterization (solubility/dissolution) of a formulation, without reporting in vivo pharmacokinetic parameters. |
| PGx | Ragia_2009 | not_relevant | 2 | 8 | The study reports an association between CYP2C9 genotype and the incidence of hypoglycemia (an adverse event), not a direct measurement of a pharmacokinetic or pharmacodynamic parameter of glimepiride. |
| popPK | Ramachandra_2026 | irrelevant | 2 | 0 | This is a review of analytical and bioanalytical methods without original quantitative PK parameter values for glimepiride. |
| popPK | Rizvi_2016 | irrelevant | 0 | 0 | The study focuses on in-vitro enzymatic activity (AChE inhibition) and molecular docking, reporting an IC50 value rather than pharmacokinetic parameters like clearance, volume, or half-life. |
| popPK | Rosati_1998 | irrelevant | 0 | 0 | no_text gate: only 58 chars of text extracted (&lt; 400) |
| popPK | Rosskamp_1996 | irrelevant | 0 | 0 | The paper is a clinical review/profile that discusses therapeutic efficacy and qualitative PK features (bioavailability) but does not provide a PK model or quantitative disposition parameters (CL, V, ka). |
| popPK | Roy_2025 | irrelevant | 0 | 0 | The paper is a mechanistic study on β-cell dysfunction using glimepiride only as a comparator agent in cell culture assays, containing no pharmacokinetic parameters for glimepiride. |
| popPK | Salem_2017 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of levetiracetam on rat duodenum, using glimepiride only as a tool compound to rule out a KATP channel mechanism; no PK parameters for glimepiride are reported. |
| PD | Salem_2017 | not_relevant | 0 | 0 | The paper studies the pharmacodynamics of levetiracetam, not glimepiride; glimepiride is only used as a tool compound to rule out a mechanism. |
| popPK | Schollmeier_1993 | irrelevant | 0 | 0 | The paper is a subchronic and chronic toxicity study in dogs that reports pathological changes and pharmacodynamic effects, but does not provide quantitative pharmacokinetic parameters (CL, V, t1/2, etc.). |
| popPK | Schwartz_2010 | irrelevant | 0 | 0 | This is a systematic review of clinical efficacy (HbA1c) for DPP-4 inhibitors, not a pharmacokinetic study, and it explicitly excludes pharmacokinetic studies. |
| popPK | Shao_2016 | irrelevant | 1 | 0 | The paper is an in-vitro drug-drug interaction study reporting IC50 values for metabolic inhibition, not pharmacokinetic disposition parameters (CL, V, t1/2) for glimepiride. |
| PGx | Shao_2016 | not_relevant | 1 | 0 | The paper describes a drug-drug interaction (clopidogrel and glimepiride) and does not investigate the effect of a specific gene variant/genotype/phenotype on glimepiride's pharmacokinetic or pharmacodynamic parameters. |
| PGx | Shobha_2010 | not_relevant | 0 | 0 | The paper describes a drug-drug interaction (voriconazole and glimepiride), not a pharmacogenomic effect involving gene variants or genotypes. |
| popPK | Shore_2019 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of darolutamide, not glimepiride. |
| popPK | Sidhom_2023 | irrelevant | 0 | 0 | The study focuses on the synthesis and antidiabetic efficacy of new DHP compounds, using glimepiride only as a comparator in blood glucose tests without reporting any pharmacokinetic parameters for glimepiride. |
| popPK | Song_2001 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology analysis of channel binding and IC50 values, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Surendran_2017 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction in rats, not a pharmacogenomic effect of a gene variant on glimepiride PK/PD. |
| PGx | Swen_2010 | not_relevant | 5 | 2 | The study reports no significant effect and only notes a trend towards lower glimepiride dose for CYP2C9*3 carriers, without providing quantitative PK/PD parameters or fitted effect sizes. |
| PGx | Swen_2011 | not_relevant | 1 | 1 | The text is a general overview of pharmacogenetics guidelines for 53 drugs and does not specifically mention glimepiride or its PK/PD parameters. |
| PGx | Tateishi_2021 | not_relevant | 2 | 5 | The paper reports a drug-drug interaction (CYP2C9 inhibition by bucolome and warfarin) causing hypoglycemia, not a pharmacogenomic effect (gene variant) on glimepiride PK/PD. |
| PGx | Thakkar_2017 | not_relevant | 2 | 0 | The paper is a letter to the editor and response regarding the bioanalytical methods (sample preparation and instrument settings) used in a previous study, containing no pharmacogenomic data, PK/PD results, or effect sizes for glimepiride. |
| PGx | Thikekar_2022 | not_relevant | 0 | 0 | The study investigates herb-drug interactions (Diabecon) in rats, not the effect of a gene variant or genotype on pharmacokinetics/pharmacodynamics. |
| popPK | Tomlinson_2022 | irrelevant | 0 | 0 | The paper is a review of gliclazide, a different drug, and does not report pharmacokinetic parameters for glimepiride. |
| popPK | Tripathi_2014 | irrelevant | 2 | 0 | Study is an animal pharmacodynamic/drug interaction study in diabetic rats that references bioavailability qualitatively but provides no quantitative PK parameters (CL, V, etc.) in the evidence. |
| PGx | Tripathi_2015 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction between glimepiride and sildenafil in an animal model without any mention of genetic variants, genotypes, or pharmacogenomics. |
| popPK | Trujillo_2014 | irrelevant | 0 | 0 | The paper is a review of albiglutide, and glimepiride is only mentioned as a comparator drug. |
| popPK | Utzschneider_2025 | irrelevant | 0 | 0 | The study focuses on β-cell function parameters (ISR, sensitivity) derived from glucose tolerance tests, not the pharmacokinetic disposition parameters (CL, V, ka) of glimepiride. |
| PGx | Veeresham_2012 | not_relevant | 0 | 0 | The study investigates drug-drug interaction (piperine) on glimepiride PK/PD, not the effect of a genetic variant or genotype. |
| popPK | Viana_2018_2 | relevant | 8 | 0 | Study reports PK of glimepiride in rats, but no numeric parameter values (CL, V, t1/2, etc.) are present in the provided text. |
| PGx | Viana_2018_2 | not_relevant | 0 | 0 | The study investigates the impact of physical polymorphic forms (Form I vs Form II) on PK/PD, not gene variants or genotypes (pharmacogenomics). |
| PGx | Wolthuis_2024 | not_relevant | 4 | 5 | The paper is a clinical guideline that acknowledges CYP2C9 variants increase glimepiride levels but does not report new experimental data or fitted quantitative pharmacokinetic/pharmacodynamic effect sizes. |
| popPK | Xu_2009 | irrelevant | 1 | 0 | The paper is a review discussing qualitative impacts of genetic polymorphisms on sulfonylureas without providing specific quantitative PK parameter values for glimepiride. |
| PGx | Xu_2009 | not_relevant | 6 | 0 | It is a broad review of the class of sulfonylureas and lacks specific quantitative PK/PD data for glimepiride. |
| popPK | Yang_2025 | irrelevant | 0 | 0 | The paper is a review of in silico/AI modeling for drug disposition and does not report pharmacokinetic parameters for glimepiride. |
| popPK | Yoo_2011 | irrelevant | 9 | 0 | The paper reports a population PK model for glimepiride, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence, only relative effects (1.60-fold). |
| PD | Yoo_2020_2 | not_relevant | 3 | 2 | The study reports PK parameters and qualitative PD changes (glucose/insulin levels) but does not provide a concentration-effect model or numeric PD parameters (e.g., Emax, EC50) for glimepiride. |
| popPK | Yun_2006 | relevant | 6 | 2 | The study reports a two-compartmental PK model for glimepiride in humans but only provides peak concentration and time to peak in the abstract, without explicit values for clearance, volume, or rate constants in the provided evidence. |
| PGx | Zachařová_2012 | not_relevant | 0 | 0 | The paper studies CYP expression in rats and only mentions glimepiride in the conclusion as a potential interaction candidate, providing no data on glimepiride PK/PD. |
| popPK | Zhou_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of steviol acyl glucuronide (SVAG) and uses glimepiride only as an inhibitor of OAT3 transport, not as the subject of PK parameter estimation. |
| popPK | de_2024 | irrelevant | 2 | 0 | The study uses a generic PBK model for cholestasis risk assessment where glimepiride is one of many drugs, and specific quantitative PK parameters (CL, V, ka) are not reported in the provided text but referenced as being in supplementary files or external repositories. |
| popPK | unknown_2024 | irrelevant | 0 | 0 | no_text gate: only 61 chars of text extracted (&lt; 400) |
| popPK | van_2013 | irrelevant | 0 | 0 | The study is an in-vitro transporter inhibition assay where glimepiride serves as an inhibitor, not a subject of pharmacokinetic analysis, and no disposition parameters for glimepiride are reported. |
| PGx | van_2013 | not_relevant | 2 | 5 | The study investigates the impact of the OATP1B1 variant on the transport of rosuvastatin and shows that glimepiride inhibits this transport, but it does not report a pharmacogenomic effect on the PK/PD parameters of glimepiride itself. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-22 14:17 UTC</sub>
