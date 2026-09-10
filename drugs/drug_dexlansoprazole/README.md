# dexlansoprazole

- **generic name:** dexlansoprazole
- **ATC codes:** `A02BC06`
- **DrugBank:** [DB05351](https://go.drugbank.com/drugs/DB05351)
- **groups:** approved, investigational

## About

**Description.** Dexlansoprazole is a new-generation proton pump inhibitor (PPI) used for the management of symptoms associated with gastroesophageal reflux disease (GERD) and erosive esophagitis. Dexlansoprazole is the R-enantiomer of [DB00448], which is composed of a racemic mixture of the R- and S-enantiomers. Compared to the older generation of PPIs (which includes [DB00213], [DB00338], and [DB00448]),[A178084] dexlansoprazole has a unique pharmacokinetic profile due to its delayed-release and dual-delivery release system: This aims to address some limitations of the older-generation PPIs, such as short plasma half-life and the need for meal-associated dosing.[A19566, A19568, A178084, A174244] Dexlansoprazole inhibits the final step in gastric acid production by blocking the (H+, K+)-ATPase enzyme.[L48827]

**Indication.** Dexlansoprazole is a proton pump inhibitor (PPI) indicated for the: 

- Healing of all grades of erosive esophagitis (EE) for up to eight weeks in patients 12 years of age and older.[L48827]
- Maintenance of healed EE and relief of heartburn for up to six months in adults and 16 weeks in patients 12 to 17 years of age.[L48827, L48847]
- Treatment of heartburn associated with symptomatic non-erosive gastroesophageal reflux disease (GERD) for four weeks in patients 12 years of age and older.[L48827, L48847]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-10 19:49 | 14:51 | 0/0/0 | 2/0/0 | 0/0/5 | 128,763/6,456 | ollama / qwen3.8:27b-mtp-q8_0 | 32 | 11/10 | 20/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Dawei_2016](drugs/drug_dexlansoprazole/pd_Dawei_2016_PPI_disruption.md) | Dawei Z et al., A Novel Assay for Screening Inhibitors…, Scientific reports (2016) | [10.1038/srep33477](https://doi.org/10.1038/srep33477) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Michaelis_2019](drugs/drug_dexlansoprazole/pd_Michaelis_2019_CPE_formation.md) | Michaelis M et al., Omeprazole Increases the Efficacy of Ac…, Frontiers in microbiology (2019) | [10.3389/fmicb.2019.02790](https://doi.org/10.3389/fmicb.2019.02790) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Michaelis_2019](drugs/drug_dexlansoprazole/pd_Michaelis_2019_Virus_titre.md) | Michaelis M et al., Omeprazole Increases the Efficacy of Ac…, Frontiers in microbiology (2019) | [10.3389/fmicb.2019.02790](https://doi.org/10.3389/fmicb.2019.02790) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2C19** | `Q27` · CL/F | metabolism | [PMID32770672_2021](drugs/drug_dexlansoprazole/pgx_PMID32770672_2021_CYP2C19_Q27.md) | PMID32770672, Clinical Pharmacogenetics Implementatio… (2021) | [10.1002/cpt.2015](https://doi.org/10.1002/cpt.2015) |
| <span class="pk-badge pk-badge--neutral">guideline_estimate</span> | **CYP2C19** | `Q22` · CL | metabolism | [guideline](drugs/drug_dexlansoprazole/pgx_guideline_CYP2C19_PA166219301_0.md) | guideline | — |
| <span class="pk-badge pk-badge--neutral">guideline_estimate</span> | **CYP2C19** | `Q22` · CL | metabolism | [guideline](drugs/drug_dexlansoprazole/pgx_guideline_CYP2C19_PA166219301_1.md) | guideline | — |
| <span class="pk-badge pk-badge--neutral">guideline_estimate</span> | **CYP2C19** | `Q22` · CL | metabolism | [guideline](drugs/drug_dexlansoprazole/pgx_guideline_CYP2C19_PA166219301_2.md) | guideline | — |
| <span class="pk-badge pk-badge--neutral">guideline_estimate</span> | **CYP2C19** | `Q22` · CL | metabolism | [guideline](drugs/drug_dexlansoprazole/pgx_guideline_CYP2C19_PA166219301_3.md) | guideline | — |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 103 matched, 105 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_16 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Li_2017_2.pdf` | Li YQ et al., Safety, tolerability, pharmacokinetics…, European journal of clinica… (2017) | popPK | 9 | [10.1007/s00228-017-2206-6](https://doi.org/10.1007/s00228-017-2206-6) | [28138748](https://pubmed.ncbi.nlm.nih.gov/28138748) | The study reports quantitative PK parameters (clearance and half-life) for dexlansoprazole in the abstract, though volume of distribution is not explicitly listed. |
| `Kukulka_2014.pdf` | Kukulka M et al., Pharmacokinetics and safety of dexlanso…, Clinical and experimental g… (2014) | popPK | 8 | [10.2147/CEG.S67672](https://doi.org/10.2147/CEG.S67672) | [25525378](https://pubmed.ncbi.nlm.nih.gov/25525378) | The study reports PK parameters for dexlansoprazole, but the specific numeric values for clearance, volume, or half-life are not present in the provided text, only qualitative trends and p-values. |
| `Lee_2009.pdf` | Lee RD et al., Clinical trial: the effect and timing o…, Alimentary pharmacology & t… (2009) | popPK | 8 | [10.1111/j.1365-2036.2009.03979.x](https://doi.org/10.1111/j.1365-2036.2009.03979.x) | [19243357](https://pubmed.ncbi.nlm.nih.gov/19243357) | The study is a PK trial for dexlansoprazole, but the evidence only provides percentage changes in AUC and Cmax, lacking specific numeric values for clearance, volume, or half-life. |
| `Lee_2010.pdf` | Lee RD et al., The effect of time-of-day dosing on the…, Alimentary pharmacology & t… (2010) | popPK | 8 | [10.1111/j.1365-2036.2010.04272.x](https://doi.org/10.1111/j.1365-2036.2010.04272.x) | [20180789](https://pubmed.ncbi.nlm.nih.gov/20180789) | The study is a PK/PD trial for dexlansoprazole, but the provided evidence contains only qualitative descriptions of bioequivalence and pH changes without specific numeric PK parameter values (e.g., CL, V, Cmax, AUC). |
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

<sub>queue written 2026-09-10T19:45:23.552976+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Al_2026 | not_relevant | 0 | 0 | The paper reports on the acceptance of pharmacogenetic recommendations for drug selection (concordance/discordance) rather than measuring changes in PK or PD parameters of dexlansoprazole. |
| PGx | Ananthathandavan_2025 | not_relevant | 0 | 0 | The paper is a network pharmacology study focusing on drug-drug interactions (PPIs and clopidogrel) and does not report pharmacogenomic effects on the PK/PD of dexlansoprazole. |
| PGx | Andrade_2026 | not_relevant | 0 | 0 | The paper discusses the association between PPI use and dementia risk, not the effect of gene variants on the pharmacokinetics or pharmacodynamics of dexlansoprazole. |
| popPK | Aromokeye_2026 | irrelevant | 0 | 0 | The paper is a mechanistic antiviral study where dexlansoprazole is used as a probe compound to disrupt protein-protein interactions, with no pharmacokinetic parameters reported. |
| popPK | Behm_2011 | irrelevant | 0 | 0 | The text is a general overview/review of the drug's delivery system and clinical use, containing no quantitative pharmacokinetic parameters or compartmental model values. |
| PD | Behm_2011 | not_relevant | 2 | 0 | The text is a qualitative overview of the drug's delivery system and clinical indications, lacking any specific numeric PD parameters, concentration-effect curves, or dose-response data. |
| popPK | Ben_2022 | irrelevant | 0 | 0 | Review article only; dexlansoprazole is mentioned as a weak CYP2C19 inhibitor with no numeric PK parameters provided. |
| PD | Ben_2022 | not_relevant | 1 | 0 | The paper is a narrative review of drug-drug interactions and does not report any original pharmacodynamic modeling or numeric exposure-response parameters for dexlansoprazole. |
| PGx | Ben_2022 | not_relevant | 0 | 0 | The paper is a review of drug-drug interactions and does not report pharmacogenomic effects on dexlansoprazole PK/PD parameters. |
| PGx | Chen_2020 | not_relevant | 0 | 0 | The paper reports that CYP2C19 polymorphism did not affect the clinical efficacy (eradication rate) of the therapy, but it does not report any pharmacokinetic or pharmacodynamic parameters (e.g., AUC, Cmax, pH levels) for dexlansoprazole. |
| PGx | Chotivitayatarakorn_2017 | not_relevant | 0 | 0 | The study reports H. pylori eradication rates and side effects, concluding that efficacy is independent of CYP2C19 genotype, and does not report pharmacokinetic or pharmacodynamic parameters of dexlansoprazole. |
| popPK | Dawei_2016 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study identifying dexlansoprazole as an HIV integrase inhibitor, reporting no pharmacokinetic parameters. |
| popPK | Emerson_2010_2 | irrelevant | 2 | 1 | This is a review article that summarizes clinical efficacy and general pharmacokinetic properties (mean residence time) but does not report original quantitative compartmental PK parameters (CL, V, Q, ka) for dexlansoprazole. |
| PD | Emerson_2010_2 | not_relevant | 2 | 0 | The paper is a narrative review that summarizes clinical efficacy and PK properties (MRT) but does not provide specific numeric PD parameters (e.g., Emax, EC50) or detailed exposure-response curves for dexlansoprazole. |
| popPK | Frelinger_2012 | irrelevant | 2 | 0 | The study focuses on the pharmacokinetics of clopidogrel with dexlansoprazole acting as a co-administered agent, and no quantitative PK parameters for dexlansoprazole are provided in the evidence. |
| PD | Frelinger_2012 | not_relevant | 0 | 0 | The study assesses the effect of PPIs on clopidogrel pharmacokinetics, not the pharmacodynamics of dexlansoprazole itself. |
| PGx | Frelinger_2012 | not_relevant | 0 | 0 | The study assesses drug-drug interactions (PPIs on clopidogrel) in healthy volunteers, not the effect of a gene variant on dexlansoprazole PK/PD. |
| popPK | Frye_2015_2 | irrelevant | 0 | 0 | The paper is a clinical review of efficacy and outcomes for GERD management, containing no quantitative pharmacokinetic parameter values for dexlansoprazole. |
| PD | Frye_2015_2 | not_relevant | 1 | 0 | The text is a qualitative review of clinical efficacy and outcomes, containing no numeric PD parameters, concentration-effect curves, or PK/PD modeling data. |
| PGx | Grabowski_2012 | not_relevant | 5 | 2 | The paper describes qualitative differences in metabolite profiles between CYP2C19 phenotypes but does not report quantitative changes in standard PK parameters (e.g., AUC, Cmax, t1/2) or fitted effect sizes. |
| popPK | Grady_2019_2 | irrelevant | 2 | 0 | The text is a qualitative description of the formulation development and mechanism without reporting any quantitative pharmacokinetic parameter values (e.g., CL, V, ka). |
| PD | Grady_2019_2 | not_relevant | 1 | 0 | The text describes the formulation development and qualitative PK profile (dual peaks) but does not report any numeric pharmacodynamic parameters, exposure-response data, or dose-effect curves. |
| PGx | Guérin_2016 | not_relevant | 0 | 0 | The paper analyzes prescription trends and practice patterns following an FDA safety communication, not pharmacokinetic or pharmacodynamic parameters influenced by gene variants. |
| popPK | Hamada_2018 | irrelevant | 0 | 0 | The paper focuses on the stereoselective inhibition of renal transporters by lansoprazole enantiomers, not the pharmacokinetics of dexlansoprazole. |
| PD | Hamada_2018 | not_relevant | 0 | 0 | The paper focuses on the stereoselective inhibition of OAT3 by lansoprazole enantiomers, not dexlansoprazole, and does not report clinical pharmacodynamic or exposure-response relationships for the target drug. |
| popPK | Han_2023_2 | irrelevant | 0 | 0 | The evidence only concerns tegoprazan PK/PD versus dexlansoprazole and provides no dexlansoprazole PK parameters. |
| popPK | Johnson_2014 | irrelevant | 0 | 0 | The paper is a review of FDA labeling for PPIs and antiplatelet therapy, containing no original pharmacokinetic data or quantitative disposition parameters for dexlansoprazole. |
| PD | Johnson_2014 | not_relevant | 0 | 0 | The paper is a review of FDA labeling changes regarding drug-drug interactions (CYP2C19) and does not report any pharmacodynamic or exposure-response modeling for dexlansoprazole. |
| PGx | Johnson_2014 | not_relevant | 0 | 0 | The paper discusses FDA labeling for PPIs and antiplatelet therapy, not specific pharmacogenomic effects on dexlansoprazole PK/PD. |
| popPK | Kim_2002 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of lansoprazole (and its enantiomers), not dexlansoprazole. |
| PGx | Kim_2002 | not_relevant | 0 | 0 | The paper focuses on lansoprazole, not dexlansoprazole. |
| PD | Kukulka_2011 | not_relevant | 3 | 2 | The study reports comparative pharmacodynamic endpoints (mean pH, % time pH &gt; 4) for two fixed doses but does not provide a concentration-effect model, Emax/EC50 parameters, or a dose-response curve. |
| popPK | Kukulka_2014 | relevant | 8 | 2 | The study reports PK parameters for dexlansoprazole, but the specific numeric values for clearance, volume, or half-life are not present in the provided text, only qualitative trends and p-values. |
| popPK | Kukulka_2016_2 | relevant | 7 | 2 | The paper reports dexlansoprazole PK parameters like CL/F and Vz/F, but the actual numeric values are not shown in the provided evidence and appear to be in Table 2. |
| PD | Kukulka_2016_2 | not_relevant | 2 | 1 | The study is a bioequivalence trial comparing two formulations of the same dose, reporting only mean PK/PD parameters (AUC, Cmax, mean pH) without modeling an exposure-response or dose-response relationship. |
| PD | Kukulka_2016_3 | not_relevant | 3 | 2 | The study reports mean intragastric pH values (4.33 vs 4.36) and % time &gt; pH 4, but does not provide a concentration-effect model, Emax/EC50 parameters, or a detailed curve linking plasma concentrations to pH changes. |
| popPK | Kukulka_2017 | irrelevant | 2 | 0 | The paper is a bioequivalence study reporting relative changes in AUC and Cmax rather than absolute quantitative disposition parameters (CL, V, ka) for dexlansoprazole. |
| popPK | Kukulka_2018 | irrelevant | 2 | 0 | The study is a bioequivalence assessment of administration routes rather than a PK parameter estimation study, and no quantitative PK values (CL, V, t1/2, etc.) are provided in the evidence. |
| popPK | Lee_2009 | relevant | 8 | 2 | The study is a PK trial for dexlansoprazole, but the evidence only provides percentage changes in AUC and Cmax, lacking specific numeric values for clearance, volume, or half-life. |
| PD | Lee_2009 | not_relevant | 2 | 1 | The study reports PK parameters and qualitative intragastric pH changes but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative concentration-effect model. |
| popPK | Lee_2010 | relevant | 8 | 0 | The study is a PK/PD trial for dexlansoprazole, but the provided evidence contains only qualitative descriptions of bioequivalence and pH changes without specific numeric PK parameter values (e.g., CL, V, Cmax, AUC). |
| PD | Lee_2010 | not_relevant | 2 | 1 | The study reports PK and PD (intragastric pH) outcomes for different dosing times but does not provide a concentration-effect or dose-response model with numeric PD parameters (e.g., EC50, Emax) or a curve linking exposure to effect. |
| popPK | Liu_2005 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP2C9 activation by lansoprazole enantiomers, not a pharmacokinetic study of dexlansoprazole. |
| PD | Liu_2005 | not_relevant | 0 | 0 | The paper investigates the effect of lansoprazole enantiomers on CYP2C9 enzyme activity in vitro, which is a pharmacokinetic/metabolic interaction study, not a pharmacodynamic exposure-response analysis for the drug's therapeutic effect. |
| popPK | Makarenko_2019 | irrelevant | 0 | 0 | This paper is about mild cognitive impairment in older adults, not dexlansoprazole PK; no dexlansoprazole disposition parameters are present. |
| PD | Makarenko_2019 | not_relevant | 0 | 0 | The paper is a qualimetric market analysis comparing drug competitiveness based on efficacy, safety, and cost, and does not report any pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters for dexlansoprazole. |
| popPK | Metz_2009 | irrelevant | 1 | 0 | The paper is a review article discussing the formulation and general PK profile without reporting specific quantitative disposition parameters (CL, V, etc.) for dexlansoprazole. |
| PD | Metz_2009 | not_relevant | 2 | 0 | The text is a review article that qualitatively describes the PK/PD benefits of dexlansoprazole MR (dual-peak profile, increased time pH &gt;4) but does not provide specific numeric PD parameters (e.g., Emax, EC50) or extractable concentration-effect curves. |
| popPK | Michaelis_2019 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on antiviral efficacy where dexlansoprazole is a comparator agent, and it contains no pharmacokinetic parameters. |
| PGx | Miura_2004 | not_relevant | 0 | 0 | The paper studies the pharmacogenomics of lansoprazole, not dexlansoprazole. |
| popPK | Miura_2005 | irrelevant | 0 | 0 | The paper is about lansoprazole enantiomers, not dexlansoprazole, and the numeric PK values shown are for lansoprazole only. |
| PGx | Miura_2005 | not_relevant | 0 | 0 | The paper studies the pharmacogenomics of lansoprazole, not dexlansoprazole. |
| PGx | Miura_2005_2 | not_relevant | 0 | 0 | The paper studies the pharmacokinetics of rabeprazole and lansoprazole, not dexlansoprazole. |
| popPK | Miura_2006 | irrelevant | 0 | 0 | The paper is about lansoprazole/rabeprazole enantiomers, not dexlansoprazole, so no dexlansoprazole PK values are present. |
| PGx | Miura_2006 | not_relevant | 0 | 0 | The paper reviews the pharmacogenomics of lansoprazole and rabeprazole, not dexlansoprazole. |
| PGx | Miura_2010 | not_relevant | 0 | 0 | The paper studies lansoprazole, not dexlansoprazole. |
| PGx | Miura_2010_2 | not_relevant | 0 | 0 | The paper studies lansoprazole, not dexlansoprazole. |
| PGx | Mok_2023 | not_relevant | 0 | 0 | The paper reports antiviral activity of dexlansoprazole against SARS-CoV-2 but does not investigate pharmacogenomic effects on its pharmacokinetic or pharmacodynamic parameters. |
| PGx | Niioka_2008 | not_relevant | 2 | 5 | The study focuses on a sparse sampling method to estimate AUC for lansoprazole (not dexlansoprazole) and uses CYP2C19 genotype only as a covariate in the prediction formula, rather than reporting a direct pharmacogenomic effect size on PK parameters. |
| popPK | Oldfield_2016 | irrelevant | 2 | 0 | The paper is a review article discussing the drug's profile and market, but the provided evidence contains no quantitative pharmacokinetic parameter values. |
| PD | Oldfield_2016 | not_relevant | 2 | 0 | The text is a review summary that mentions pharmacodynamics qualitatively but does not provide specific numeric PD parameters or exposure-response data. |
| popPK | Parekh_2014_2 | irrelevant | 1 | 0 | The paper is a review article discussing pharmacokinetics qualitatively without providing original quantitative disposition parameter values for dexlansoprazole. |
| PD | Parekh_2014_2 | not_relevant | 2 | 1 | The text is a review article introduction and expert opinion that mentions pharmacodynamics but does not present specific numeric PD parameters or exposure-response data for dexlansoprazole. |
| PGx | Roberts_2021 | not_relevant | 0 | 0 | The paper is a retrospective review of PGx testing utility and does not report specific pharmacokinetic or pharmacodynamic effect sizes for dexlansoprazole. |
| popPK | Shilakari_2026 | irrelevant | 0 | 0 | The study is an in-vitro/ex-vivo formulation development paper that does not report in-vivo pharmacokinetic parameters (CL, V, ka, etc.) for dexlansoprazole. |
| popPK | Shin_2013 | irrelevant | 3 | 0 | This is a review-style discussion of PPIs with dexlansoprazole mentioned only as an example, and no readable quantitative PK parameters for dexlansoprazole are present. |
| PD | Shin_2013 | not_relevant | 2 | 0 | The text is a general review of PPI pharmacology and mentions dexlansoprazole qualitatively but provides no numeric PD parameters, concentration-effect curves, or specific exposure-response data. |
| PGx | Shin_2013 | not_relevant | 2 | 0 | The paper is a general review of PPIs that mentions CYP2C19 polymorphism affects racemic PPIs, but it does not report specific pharmacogenomic data or quantitative PK/PD parameters for dexlansoprazole. |
| popPK | Vakily_2009_2 | irrelevant | 4 | 0 | The paper describes PK/PD characteristics and exposure-response relationships but does not report specific quantitative disposition parameters (CL, V, ka, t1/2) for dexlansoprazole in the provided evidence. |
| popPK | Vakily_2009_3 | irrelevant | 1 | 0 | The study focuses on the effect of dexlansoprazole on the pharmacokinetics of other drugs (diazepam, phenytoin, theophylline, warfarin) rather than reporting quantitative disposition parameters for dexlansoprazole itself. |
| PGx | Vakily_2009_3 | not_relevant | 0 | 0 | The paper reports drug-drug interaction studies in healthy volunteers without stratifying by genotype or reporting pharmacogenomic effects. |
| popPK | Wedemeyer_2014_2 | irrelevant | 1 | 0 | Dexlansoprazole is only mentioned as a comparator in a review, and no readable quantitative PK parameters for dexlansoprazole are provided here. |
| PGx | Wedemeyer_2014_2 | not_relevant | 0 | 0 | The text discusses pharmacokinetic interactions of other PPIs (pantoprazole, lansoprazole) and does not report pharmacogenomic effects on dexlansoprazole. |
| popPK | Wittbrodt_2009 | irrelevant | 3 | 2 | The paper is a clinical review that cites PK parameters (Vd, t1/2) from other studies rather than reporting original quantitative disposition data or population PK models for dexlansoprazole. |
| PD | Wittbrodt_2009 | not_relevant | 2 | 1 | The text is a review summarizing clinical efficacy and PK profiles (mean concentration-time curves) but does not report a quantitative exposure-response model or numeric PD parameters (e.g., Emax, EC50) for dexlansoprazole. |
| popPK | Yang_2016_2 | irrelevant | 1 | 0 | The paper is a general review of proton pump inhibitors that mentions dexlansoprazole only as an example of a developed stereoisomer without providing any specific quantitative pharmacokinetic parameter values. |
| PD | Yang_2016_2 | not_relevant | 1 | 0 | The text is a qualitative review discussing general PPI properties and development trends without providing specific numeric PD parameters or exposure-response data for dexlansoprazole. |
| popPK | Zhang_2020 | irrelevant | 0 | 0 | The provided evidence contains only the title of a review paper and no quantitative pharmacokinetic parameter values for dexlansoprazole. |
| PD | Zhang_2020 | not_relevant | 0 | 0 | The provided text is only the title of a paper and does not contain the full text, data, or numeric PD parameters required to assess the relationship. |
| PGx | Zhang_2020 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the specific data or results for dexlansoprazole. |
| PGx | Zhou_2009 | not_relevant | 0 | 0 | The paper is a general review of CYP2C9 substrates and inhibitors and does not report specific pharmacogenomic effects on dexlansoprazole PK/PD parameters. |
| PGx | Zou_2017 | not_relevant | 2 | 0 | The text is a review discussing the interaction between PPIs and clopidogrel, mentioning dexlansoprazole only as a PPI with weaker CYP2C19 affinity, but it does not report specific pharmacogenomic effects on dexlansoprazole's PK or PD parameters. |
| popPK | Zvyaga_2012 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP450 inhibition (IC50 values) and does not report pharmacokinetic disposition parameters (CL, V, ka, etc.) for dexlansoprazole. |
| PGx | Zvyaga_2012 | not_relevant | 0 | 0 | The paper evaluates PPIs as CYP inhibitors in vitro but does not report pharmacogenomic effects (gene variants) on the PK or PD of dexlansoprazole. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_dexlansoprazole`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
