<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;dexlansoprazole&quot;}]"></div>

# dexlansoprazole

- **generic name:** dexlansoprazole
- **ATC codes:** `A02BC06`
- **DrugBank:** [DB05351](https://go.drugbank.com/drugs/DB05351) · **PubChem:** [CID 9578005](https://pubchem.ncbi.nlm.nih.gov/compound/9578005)
- **molar mass:** 369.36 g/mol (C16H14F3N3O2S) — DrugBank
- **groups:** approved, investigational

## About

Dexlansoprazole is a proton-pump inhibitor used to treat acid-related conditions such as gastroesophageal reflux disease, esophagitis, gastritis, and indigestion. It is an approved medicine, used mainly for peptic ulcer and reflux disorders, and carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5268339](https://www.wikidata.org/wiki/Q5268339) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Dawei_2016_PPI](drugs/drug_dexlansoprazole/pd_Dawei_2016_PPI.md) | IN CCD-LEDGF/p75 IBD interaction ← dexlansoprazole · direct sigmoid Emax (Hill) effect | — | Dawei Z et al., A Novel Assay for Screening Inhibitors…, Scientific reports (2016) | [10.1038/srep33477](https://doi.org/10.1038/srep33477) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Dawei_2016_Kd](drugs/drug_dexlansoprazole/pd_Dawei_2016_Kd.md) | Dissociation constant ← dexlansoprazole · target-mediated drug disposition | — | Dawei Z et al., A Novel Assay for Screening Inhibitors…, Scientific reports (2016) | [10.1038/srep33477](https://doi.org/10.1038/srep33477) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP2C19** | `Q27` · CL/F | metabolism | [PMID32770672_2021](drugs/drug_dexlansoprazole/pgx_PMID32770672_2021_CYP2C19_Q27.md) | PMID32770672, Clinical Pharmacogenetics Implementatio… (2021) | [10.1002/cpt.2015](https://doi.org/10.1002/cpt.2015) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **ATP4A** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Sun_2017](drugs/drug_dexlansoprazole/pgx_Sun_2017_ATP4A_Q100.md) | Sun LN et al., Impact of Gastric H+/K+-ATPase rs273374…, Frontiers in pharmacology (2017) | [10.3389/fphar.2017.00670](https://doi.org/10.3389/fphar.2017.00670) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP2C19** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Sun_2017](drugs/drug_dexlansoprazole/pgx_Sun_2017_CYP2C19_Q100.md) | Sun LN et al., Impact of Gastric H+/K+-ATPase rs273374…, Frontiers in pharmacology (2017) | [10.3389/fphar.2017.00670](https://doi.org/10.3389/fphar.2017.00670) |
| <span class="pk-badge pk-badge--neutral" title="CPIC/DPWG-derived estimate, not a primary-paper estimate.">guideline estimate</span> | **CYP2C19** | `Q22` · CL | metabolism | [guideline](drugs/drug_dexlansoprazole/pgx_guideline_CYP2C19_PA166219301_0.md) | guideline | — |
| <span class="pk-badge pk-badge--neutral" title="CPIC/DPWG-derived estimate, not a primary-paper estimate.">guideline estimate</span> | **CYP2C19** | `Q22` · CL | metabolism | [guideline](drugs/drug_dexlansoprazole/pgx_guideline_CYP2C19_PA166219301_1.md) | guideline | — |
| <span class="pk-badge pk-badge--neutral" title="CPIC/DPWG-derived estimate, not a primary-paper estimate.">guideline estimate</span> | **CYP2C19** | `Q22` · CL | metabolism | [guideline](drugs/drug_dexlansoprazole/pgx_guideline_CYP2C19_PA166219301_2.md) | guideline | — |
| <span class="pk-badge pk-badge--neutral" title="CPIC/DPWG-derived estimate, not a primary-paper estimate.">guideline estimate</span> | **CYP2C19** | `Q22` · CL | metabolism | [guideline](drugs/drug_dexlansoprazole/pgx_guideline_CYP2C19_PA166219301_3.md) | guideline | — |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=dexlansoprazole).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `CYP2C19` inhibitor/metabolism/substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ATP4A (inhibitor), ATP4A (target), ATP4B (inhibitor), DDAH1 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 10:53 | 5:39 | 0/0/0 | 1/0/0 | 0/0/7 | 174,374/7,304 | ollama / qwen3.8:27b-mtp-q8_0 | 31 | 12/10 | 19/0 | 0 |

## Coverage

- **PubMed hits:** 126 matched, 126 returned
- **screened:** 7  ·  **relevant:** 6
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_17 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Li_2017_2.pdf` | Li YQ et al., Safety, tolerability, pharmacokinetics…, European journal of clinica… (2017) | popPK | 9 | [10.1007/s00228-017-2206-6](https://doi.org/10.1007/s00228-017-2206-6) | [28138748](https://pubmed.ncbi.nlm.nih.gov/28138748) | The abstract reports quantitative pharmacokinetic parameters (clearance and half-life) for dexlansoprazole in healthy human subjects. |
| `Kukulka_2012.pdf` | Kukulka M et al., Pharmacokinetics and safety of dexlanso…, Journal of pediatric gastro… (2012) | popPK | 8 | [10.1097/MPG.0b013e31822a323a](https://doi.org/10.1097/MPG.0b013e31822a323a) | [21716130](https://pubmed.ncbi.nlm.nih.gov/21716130) | The study reports quantitative PK parameters (Cmax, AUC) for dexlansoprazole in humans, but lacks specific clearance, volume, or half-life values. |
| `Kukulka_2014.pdf` | Kukulka M et al., Pharmacokinetics and safety of dexlanso…, Clinical and experimental g… (2014) | popPK | 8 | [10.2147/CEG.S67672](https://doi.org/10.2147/CEG.S67672) | [25525378](https://pubmed.ncbi.nlm.nih.gov/25525378) | The study reports PK parameters (AUC, Cmax) for dexlansoprazole in humans, but specific numeric values are not present in the provided text. |
| `Kukulka_2018.pdf` | Kukulka M et al., Bioavailability of dexlansoprazole dela…, Clinical and experimental g… (2018) | popPK | 8 | [10.2147/CEG.S138580](https://doi.org/10.2147/CEG.S138580) | [30323643](https://pubmed.ncbi.nlm.nih.gov/30323643) | The study reports pharmacokinetic parameters for dexlansoprazole, but the specific numeric values are not present in the provided evidence. |
| `Lee_2009.pdf` | Lee RD et al., Clinical trial: the effect and timing o…, Alimentary pharmacology & t… (2009) | popPK | 8 | [10.1111/j.1365-2036.2009.03979.x](https://doi.org/10.1111/j.1365-2036.2009.03979.x) | [19243357](https://pubmed.ncbi.nlm.nih.gov/19243357) | The study reports PK parameters for dexlansoprazole, but the specific numeric values for clearance, volume, or half-life are not present in the provided abstract text, only percentage changes in Cmax and AUC. |
| `Hamada_2018.pdf` | Hamada Y et al., Stereoselective Inhibition of Renal Bas…, Pharmacology (2018) | pd | 4 | [10.1159/000485920](https://doi.org/10.1159/000485920) | [29353278](https://www.ncbi.nlm.nih.gov/pubmed/29353278) | metadata signals extractable PD data (IC50) |
| `Liu_2005.pdf` | Liu KH et al., Lansoprazole enantiomer activates human…, Drug metabolism and disposi… (2005) | pd | 4 | [10.1124/dmd.104.001438](https://doi.org/10.1124/dmd.104.001438) | [15537834](https://www.ncbi.nlm.nih.gov/pubmed/15537834) | metadata signals extractable PD data (EC50) |
| `Frelinger_2012.pdf` | Frelinger AL et al., A randomized, 2-period, crossover desig…, Journal of the American Col… (2012) | pgx | 8 | [10.1016/j.jacc.2011.12.024](https://doi.org/10.1016/j.jacc.2011.12.024) | [22464259](https://www.ncbi.nlm.nih.gov/pubmed/22464259) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Kim_2002.pdf` | Kim KA et al., Enantioselective disposition of lansopr…, Clinical pharmacology and t… (2002) | pgx | 8 | [10.1067/mcp.2002.126176](https://doi.org/10.1067/mcp.2002.126176) | [12152007](https://www.ncbi.nlm.nih.gov/pubmed/12152007) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Miura_2004.pdf` | Miura M et al., Pharmacokinetic differences between the…, European journal of clinica… (2004) | pgx | 8 | [10.1007/s00228-004-0809-1](https://doi.org/10.1007/s00228-004-0809-1) | [15448955](https://www.ncbi.nlm.nih.gov/pubmed/15448955) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Miura_2010.pdf` | Miura M et al., Influence of CYP2C19 and ABCB1 polymorp…, Xenobiotica; the fate of fo… (2010) | pgx | 8 | [10.3109/00498254.2010.494201](https://doi.org/10.3109/00498254.2010.494201) | [20528170](https://www.ncbi.nlm.nih.gov/pubmed/20528170) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Niioka_2008.pdf` | Niioka T et al., Estimation of the area under the concen…, European journal of clinica… (2008) | pgx | 8 | [10.1007/s00228-007-0455-5](https://doi.org/10.1007/s00228-007-0455-5) | [18224311](https://www.ncbi.nlm.nih.gov/pubmed/18224311) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Zhang_2020.pdf` | Zhang HJ et al., Effects of genetic polymorphisms on the…, Pharmacological research (2020) | pgx | 8 | [10.1016/j.phrs.2019.104606](https://doi.org/10.1016/j.phrs.2019.104606) | [31846760](https://www.ncbi.nlm.nih.gov/pubmed/31846760) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Ananthathandavan_2025.pdf` | Ananthathandavan P et al., Delineating CYP2C19-mediated Interactio…, Current drug discovery tech… (2025) | pgx | 7 | [10.2174/0115701638334244241224062453](https://doi.org/10.2174/0115701638334244241224062453) | [39817374](https://www.ncbi.nlm.nih.gov/pubmed/39817374) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Andrade_2026.pdf` | Andrade C, Proton Pump Inhibitors and the Risk of…, The Journal of clinical psy… (2026) | pgx | 7 | [10.4088/JCP.26f16420](https://doi.org/10.4088/JCP.26f16420) | [41983734](https://www.ncbi.nlm.nih.gov/pubmed/41983734) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Johnson_2014.pdf` | Johnson DA et al., Proton-pump inhibitors in patients requ…, Postgraduate medicine (2014) | pgx | 7 | [10.3810/pgm.2014.05.2772](https://doi.org/10.3810/pgm.2014.05.2772) | [24918808](https://www.ncbi.nlm.nih.gov/pubmed/24918808) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Grabowski_2012.pdf` | Grabowski B et al., Absorption, distribution, metabolism an…, Clinical drug investigation (2012) | pgx | 5 | [10.2165/11630930-000000000-00000](https://doi.org/10.2165/11630930-000000000-00000) | [22455762](https://www.ncbi.nlm.nih.gov/pubmed/22455762) | metadata signals extractable PGX data (CYP2C19) |

<sub>queue written 2026-10-04 10:49 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abel_2010_2 | irrelevant | 2 | 0 | This is a narrative review of clinical efficacy and general pharmacology that does not report specific quantitative population pharmacokinetic parameter values (CL, V, ka, etc.) for dexlansoprazole. |
| PGx | Al_2026 | not_relevant | 0 | 0 | The paper reports on the acceptance of pharmacogenetic recommendations for drug selection (concordance/discordance) rather than measuring changes in PK or PD parameters of dexlansoprazole. |
| PGx | Ananthathandavan_2025 | not_relevant | 0 | 0 | The paper is a network pharmacology study focusing on drug-drug interactions (PPIs and clopidogrel) and does not report pharmacogenomic effects on the PK/PD of dexlansoprazole. |
| PGx | Andrade_2026 | not_relevant | 0 | 0 | The paper discusses the association between PPI use and dementia risk, not the effect of gene variants on the pharmacokinetics or pharmacodynamics of dexlansoprazole. |
| popPK | Aromokeye_2026 | irrelevant | 0 | 0 | The paper is a mechanistic antiviral study where dexlansoprazole is used as a probe compound to disrupt protein-protein interactions, with no pharmacokinetic parameters reported. |
| popPK | Aslam_2009_2 | irrelevant | 2 | 0 | The paper is a narrative review of pharmacology and efficacy without reporting original quantitative PK parameter values. |
| popPK | Behm_2011 | irrelevant | 1 | 0 | The text is a qualitative review of the drug's delivery system and clinical use, containing no quantitative pharmacokinetic parameter values. |
| PD | Behm_2011 | not_relevant | 2 | 0 | The text is a qualitative overview of the drug's delivery system and clinical indications, lacking any specific numeric PD parameters, concentration-effect curves, or dose-response data. |
| popPK | Ben_2022 | irrelevant | 0 | 0 | Review article only; dexlansoprazole is mentioned as a weak CYP2C19 inhibitor with no numeric PK parameters provided. |
| PD | Ben_2022 | not_relevant | 1 | 0 | The paper is a narrative review of drug-drug interactions and does not report any original pharmacodynamic modeling or numeric exposure-response parameters for dexlansoprazole. |
| PGx | Ben_2022 | not_relevant | 0 | 0 | The paper is a review of drug-drug interactions and does not report pharmacogenomic effects on dexlansoprazole PK/PD parameters. |
| PGx | Chen_2020 | not_relevant | 0 | 0 | The paper reports that CYP2C19 polymorphism did not affect the clinical efficacy (eradication rate) of the therapy, but it does not report specific pharmacokinetic or pharmacodynamic parameter changes (e.g., AUC, Cmax, pH levels) associated with the genotype. |
| PGx | Chotivitayatarakorn_2017 | not_relevant | 0 | 0 | The study reports H. pylori eradication rates (clinical efficacy) stratified by CYP2C19 genotype, but does not report pharmacokinetic or pharmacodynamic parameters of dexlansoprazole. |
| popPK | Dawei_2016 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study identifying dexlansoprazole as an HIV integrase inhibitor, reporting no pharmacokinetic parameters. |
| popPK | Emerson_2010_2 | irrelevant | 2 | 0 | This is a review article that summarizes clinical efficacy and general pharmacokinetic properties (mean residence time) but does not report original quantitative compartmental PK parameters (CL, V, Q, ka) for dexlansoprazole. |
| PD | Emerson_2010_2 | not_relevant | 2 | 0 | The paper is a narrative review that summarizes clinical efficacy and general pharmacology but does not provide specific numeric PD parameters (e.g., Emax, EC50) or detailed exposure-response data for dexlansoprazole. |
| popPK | Frelinger_2012 | irrelevant | 2 | 0 | The study focuses on the pharmacokinetics of clopidogrel with dexlansoprazole acting as a co-administered agent, and no quantitative PK parameters for dexlansoprazole are provided in the evidence. |
| PD | Frelinger_2012 | not_relevant | 0 | 0 | The study assesses the effect of PPIs on clopidogrel pharmacokinetics, not the pharmacodynamics of dexlansoprazole itself. |
| PGx | Frelinger_2012 | not_relevant | 0 | 0 | The study assesses drug-drug interactions (PPIs on clopidogrel) in healthy volunteers, not the effect of a gene variant on dexlansoprazole PK/PD. |
| popPK | Frye_2015_2 | irrelevant | 1 | 0 | The paper is a clinical review of efficacy and outcomes for GERD management, lacking original quantitative pharmacokinetic parameter values. |
| PD | Frye_2015_2 | not_relevant | 1 | 0 | The text is a qualitative review of clinical efficacy and outcomes, containing no numeric PD parameters, concentration-effect data, or dose-response curves. |
| PGx | Grabowski_2012 | not_relevant | 5 | 2 | The study describes qualitative differences in metabolite profiles between CYP2C19 phenotypes but does not report quantitative changes in standard PK parameters (e.g., AUC, Cmax, t1/2) or fitted effect sizes. |
| popPK | Grady_2019_2 | irrelevant | 2 | 0 | The text is a qualitative description of the formulation development and general PK profile characteristics (dual peaks) without reporting any quantitative disposition parameters (CL, V, ka, etc.). |
| PD | Grady_2019_2 | not_relevant | 1 | 0 | The text describes the formulation development and qualitative PK profile (dual peaks) but does not report any numeric pharmacodynamic parameters, exposure-response data, or dose-effect curves. |
| PGx | Guérin_2016 | not_relevant | 0 | 0 | The paper analyzes prescribing patterns and the impact of an FDA safety communication on the co-prescription of clopidogrel and PPIs, but it does not report any pharmacogenomic effects on the pharmacokinetic or pharmacodynamic parameters of dexlansoprazole. |
| popPK | Hamada_2018 | irrelevant | 0 | 0 | The paper focuses on the stereoselective inhibition of renal transporters by lansoprazole enantiomers, not the pharmacokinetics of dexlansoprazole. |
| PD | Hamada_2018 | not_relevant | 0 | 0 | The paper focuses on the stereoselective inhibition of OAT3 by lansoprazole enantiomers, not dexlansoprazole, and does not report clinical pharmacodynamic or exposure-response relationships for the target drug. |
| popPK | Han_2023_2 | irrelevant | 0 | 0 | The evidence only concerns tegoprazan PK/PD versus dexlansoprazole and provides no dexlansoprazole PK parameters. |
| popPK | Johnson_2014 | irrelevant | 0 | 0 | The paper is a review of FDA labeling for PPIs and antiplatelet therapy, containing no original pharmacokinetic data or quantitative disposition parameters for dexlansoprazole. |
| PD | Johnson_2014 | not_relevant | 0 | 0 | The paper is a review of FDA labeling changes regarding drug-drug interactions (CYP2C19) and does not report any pharmacodynamic or exposure-response modeling for dexlansoprazole. |
| PGx | Johnson_2014 | not_relevant | 0 | 0 | The paper discusses FDA labeling for PPIs and antiplatelet therapy, not specific pharmacogenomic effects on dexlansoprazole PK/PD. |
| popPK | Kim_2002 | irrelevant | 0 | 0 | no_text gate: only 90 chars of text extracted (&lt; 400) |
| PGx | Kim_2002 | not_relevant | 0 | 0 | The paper focuses on lansoprazole, not dexlansoprazole. |
| PD | Kukulka_2011 | not_relevant | 3 | 2 | The study reports comparative pharmacodynamic endpoints (mean pH, % time pH &gt; 4) for two fixed doses but does not provide a concentration-effect model, Emax/EC50 parameters, or a dose-response curve. |
| popPK | Kukulka_2014 | relevant | 8 | 2 | The study reports PK parameters (AUC, Cmax) for dexlansoprazole in humans, but specific numeric values are not present in the provided text. |
| popPK | Kukulka_2016_2 | irrelevant | 4 | 2 | The study is a bioequivalence trial reporting only relative ratios and confidence intervals for AUC and Cmax, lacking absolute quantitative disposition parameters (CL, V, ka) or a population PK model for dexlansoprazole. |
| PD | Kukulka_2016_2 | not_relevant | 2 | 1 | The study is a bioequivalence trial comparing two formulations of the same dose, reporting only mean PK/PD parameters (AUC, Cmax, mean pH) without modeling an exposure-response or dose-response relationship. |
| PD | Kukulka_2016_3 | not_relevant | 3 | 2 | The study reports mean intragastric pH values (4.33 vs 4.36) and % time &gt; pH 4 as pharmacodynamic endpoints, but it does not provide a concentration-effect model, Emax/EC50 parameters, or a detailed curve linking plasma concentrations to pH changes, only comparing two fixed doses. |
| popPK | Kukulka_2017 | irrelevant | 2 | 0 | The study reports bioavailability metrics (AUC, Cmax) and bioequivalence results but does not provide quantitative disposition parameters (CL, V, ka, t1/2) or a compartmental model for dexlansoprazole. |
| popPK | Kukulka_2018 | relevant | 8 | 0 | The study reports pharmacokinetic parameters for dexlansoprazole, but the specific numeric values are not present in the provided evidence. |
| popPK | Lee_2009 | relevant | 8 | 2 | The study reports PK parameters for dexlansoprazole, but the specific numeric values for clearance, volume, or half-life are not present in the provided abstract text, only percentage changes in Cmax and AUC. |
| PD | Lee_2009 | not_relevant | 2 | 1 | The study reports PK parameters and qualitative intragastric pH changes but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative concentration-effect model. |
| popPK | Lee_2010 | relevant | 8 | 0 | The study is a PK/PD trial for dexlansoprazole, but the provided evidence contains only qualitative descriptions of bioequivalence and pH changes without specific numeric PK parameter values (e.g., CL, V, Cmax, AUC). |
| PD | Lee_2010 | not_relevant | 2 | 1 | The study reports PK and PD (intragastric pH) outcomes for different dosing times but does not provide a concentration-effect model, dose-response curve, or numeric PD parameters (e.g., Emax, EC50) linking exposure to effect. |
| popPK | Liu_2005 | irrelevant | 0 | 0 | no_text gate: only 132 chars of text extracted (&lt; 400) |
| PD | Liu_2005 | not_relevant | 0 | 0 | The paper investigates the effect of lansoprazole enantiomers on CYP2C9 enzyme activity in vitro, which is a pharmacokinetic/metabolic interaction study, not a pharmacodynamic exposure-response analysis for the drug's therapeutic effect. |
| popPK | Luo_2018 | irrelevant | 2 | 0 | The study focuses on lansoprazole enantiomers in rats, and while dexlansoprazole is administered, no quantitative PK parameters for dexlansoprazole are reported in the provided evidence. |
| popPK | Makarenko_2019 | irrelevant | 0 | 0 | This paper is about mild cognitive impairment in older adults, not dexlansoprazole PK; no dexlansoprazole disposition parameters are present. |
| PD | Makarenko_2019 | not_relevant | 0 | 0 | The paper is a qualimetric market analysis comparing drug competitiveness based on efficacy, safety, and cost, and does not report any pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters for dexlansoprazole. |
| popPK | Metz_2009 | irrelevant | 2 | 0 | This is a review article discussing the formulation and general PK profile of dexlansoprazole MR without reporting specific quantitative disposition parameters (CL, V, ka, etc.) in the provided text. |
| PD | Metz_2009 | not_relevant | 2 | 0 | The text is a review article that qualitatively describes the PK profile and acid suppression benefits of dexlansoprazole MR but does not provide specific numeric PD parameters (e.g., Emax, EC50) or extractable concentration-effect curves. |
| popPK | Michaelis_2019 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on antiviral efficacy where dexlansoprazole is a comparator agent, and it contains no pharmacokinetic parameters. |
| popPK | Miura_2004 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of lansoprazole (the racemic parent of dexlansoprazole), not dexlansoprazole itself. |
| PGx | Miura_2004 | not_relevant | 0 | 0 | The paper studies the pharmacogenomics of lansoprazole, not dexlansoprazole. |
| popPK | Miura_2005 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of lansoprazole (and its enantiomers), not dexlansoprazole. |
| PGx | Miura_2005 | not_relevant | 0 | 0 | The paper studies the pharmacogenomics of lansoprazole, not dexlansoprazole. |
| popPK | Miura_2005_2 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of lansoprazole and rabeprazole, not dexlansoprazole. |
| PGx | Miura_2005_2 | not_relevant | 0 | 0 | The paper studies rabeprazole and lansoprazole, not dexlansoprazole. |
| popPK | Miura_2006 | irrelevant | 0 | 0 | The paper is about lansoprazole/rabeprazole enantiomers, not dexlansoprazole, so no dexlansoprazole PK values are present. |
| PGx | Miura_2006 | not_relevant | 0 | 0 | The paper discusses the pharmacogenomics of lansoprazole and rabeprazole, not dexlansoprazole. |
| PGx | Miura_2010 | not_relevant | 0 | 0 | The paper studies lansoprazole, not dexlansoprazole. |
| PGx | Miura_2010_2 | not_relevant | 0 | 0 | The paper studies lansoprazole, not dexlansoprazole. |
| PGx | Mok_2023 | not_relevant | 0 | 0 | The paper evaluates the antiviral activity of dexlansoprazole against SARS-CoV-2 in vitro and in vivo, but does not report any pharmacogenomic effects on its pharmacokinetic or pharmacodynamic parameters. |
| PGx | Niioka_2008 | not_relevant | 2 | 5 | The study focuses on a sparse sampling method to estimate AUC for lansoprazole (not dexlansoprazole) and uses CYP2C19 genotype only as a covariate in the prediction formula, rather than reporting a direct pharmacogenomic effect size on PK parameters. |
| popPK | Oldfield_2016 | irrelevant | 2 | 0 | The paper is a review article discussing the drug's profile and regulatory approval, but the provided evidence contains no quantitative pharmacokinetic parameter values (CL, V, ka, etc.). |
| PD | Oldfield_2016 | not_relevant | 2 | 0 | The text is a review summary that mentions pharmacodynamics qualitatively but does not provide specific numeric PD parameters or exposure-response data. |
| popPK | Ou_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ilaprazole, not dexlansoprazole. |
| popPK | Parekh_2014_2 | irrelevant | 2 | 0 | This is a review article discussing pharmacokinetics qualitatively without providing original quantitative parameter values in the text. |
| PD | Parekh_2014_2 | not_relevant | 2 | 1 | The text is a review article introduction and expert opinion that mentions pharmacodynamics but does not present specific numeric PD parameters or exposure-response data for dexlansoprazole. |
| PGx | Prapitpaiboon_2015 | not_relevant | 2 | 5 | The study reports clinical efficacy (H. pylori eradication rates) stratified by CYP2C19 genotype, but does not report pharmacokinetic (PK) or pharmacodynamic (PD) parameters of dexlansoprazole. |
| PGx | Roberts_2021 | not_relevant | 0 | 0 | The paper is a retrospective review of PGx testing utility and does not report specific pharmacokinetic or pharmacodynamic effect sizes for dexlansoprazole. |
| popPK | Shilakari_2026 | irrelevant | 0 | 0 | The study is an in-vitro/ex-vivo formulation development paper that reports release and permeation data, not in-vivo pharmacokinetic parameters (CL, V, ka, etc.) for dexlansoprazole. |
| popPK | Shin_2013 | irrelevant | 0 | 0 | The paper is a general review of PPIs that mentions dexlansoprazole qualitatively but provides no quantitative pharmacokinetic parameters or models. |
| PD | Shin_2013 | not_relevant | 2 | 0 | The text is a general review of PPI pharmacology and mentions dexlansoprazole qualitatively but provides no numeric PD parameters, concentration-effect curves, or specific exposure-response data. |
| PGx | Shin_2013 | not_relevant | 2 | 0 | The text is a general review of PPIs that mentions CYP2C19 polymorphism affects racemic PPIs, but it does not report specific pharmacogenomic effects on PK/PD parameters for dexlansoprazole. |
| popPK | Su_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of rabeprazole in dogs, not dexlansoprazole. |
| popPK | Sun_2015 | irrelevant | 1 | 0 | The paper describes a method for lansoprazole enantiomers and mentions a PK study of dexlansoprazole, but no quantitative PK parameters (CL, V, etc.) are provided in the evidence. |
| popPK | Sun_2017 | relevant | 8 | 2 | The study reports PK parameters (CL, Vd, t1/2) for dexlansoprazole in humans, but the specific numeric values are not present in the provided evidence (tables contain only PD data). |
| popPK | Vakily_2009_2 | irrelevant | 4 | 0 | The paper describes a PK/PD analysis but the provided evidence contains only qualitative descriptions and pharmacodynamic endpoints (pH values), lacking specific quantitative disposition parameters (CL, V, ka) for dexlansoprazole. |
| popPK | Vakily_2009_3 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of co-administered probe substrates (diazepam, phenytoin, etc.) to assess drug interactions, rather than reporting quantitative disposition parameters for dexlansoprazole itself. |
| PGx | Vakily_2009_3 | not_relevant | 0 | 0 | The paper reports drug-drug interaction studies in healthy volunteers without stratifying by genotype or reporting pharmacogenomic effects. |
| popPK | Wedemeyer_2014_2 | irrelevant | 0 | 0 | The paper is a review of drug-drug interactions involving proton pump inhibitors, and dexlansoprazole is only mentioned as a comparator or co-administered agent without reporting its own quantitative pharmacokinetic parameters. |
| PGx | Wedemeyer_2014_2 | not_relevant | 0 | 0 | The text discusses pharmacokinetic interactions of other PPIs (pantoprazole, lansoprazole) and mentions CYP2C19 effects on those drugs, but does not report specific pharmacogenomic effects on dexlansoprazole PK/PD parameters. |
| popPK | Wittbrodt_2009 | irrelevant | 3 | 2 | The paper is a clinical review that cites PK parameters (Vd, t1/2) from other studies rather than reporting original quantitative disposition data or population PK models for dexlansoprazole. |
| PD | Wittbrodt_2009 | not_relevant | 2 | 1 | The text is a review summarizing clinical efficacy and PK profiles (AUC, Cmax) but does not report a quantitative exposure-response model or numeric PD parameters (e.g., EC50, Emax) for dexlansoprazole. |
| popPK | Yang_2016_2 | irrelevant | 0 | 0 | The paper is a narrative review discussing general PPI properties and development trends without reporting original quantitative pharmacokinetic parameter values for dexlansoprazole. |
| PD | Yang_2016_2 | not_relevant | 1 | 0 | The text is a qualitative review discussing general PPI properties and development trends without providing specific numeric PD parameters or exposure-response data for dexlansoprazole. |
| popPK | Zhang_2020 | irrelevant | 0 | 0 | no_text gate: only 103 chars of text extracted (&lt; 400) |
| PD | Zhang_2020 | not_relevant | 0 | 0 | The provided text is only the title of a paper and does not contain the full text, data, or numeric PD parameters required to assess the relationship. |
| PGx | Zhang_2020 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the specific data or results for dexlansoprazole. |
| PGx | Zhou_2009 | not_relevant | 0 | 0 | The paper is a general review of CYP2C9 substrates and inhibitors and does not report specific pharmacogenomic effects on dexlansoprazole PK/PD parameters. |
| PGx | Zou_2017 | not_relevant | 2 | 0 | The text is a review discussing the interaction between PPIs and clopidogrel, mentioning dexlansoprazole only as a PPI with weaker CYP2C19 affinity, but it does not report specific pharmacogenomic effects on dexlansoprazole's PK or PD parameters. |
| popPK | Zvyaga_2012 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP450 inhibition (IC50 values) and does not report pharmacokinetic disposition parameters (CL, V, ka, etc.) for dexlansoprazole. |
| PGx | Zvyaga_2012 | not_relevant | 0 | 0 | The paper evaluates PPIs as CYP inhibitors in vitro but does not report pharmacogenomic effects (gene variants) on the PK or PD of dexlansoprazole. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdexlansoprazole%5D&body=Drug%3A%20dexlansoprazole%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_dexlansoprazole/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
