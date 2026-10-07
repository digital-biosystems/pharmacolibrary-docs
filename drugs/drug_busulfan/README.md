<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01A&quot;,&quot;href&quot;:&quot;atc/L01A.md&quot;},{&quot;label&quot;:&quot;busulfan&quot;}]"></div>

# busulfan

- **generic name:** busulfan
- **ATC codes:** `L01AB01`
- **DrugBank:** [DB01008](https://go.drugbank.com/drugs/DB01008) · **PubChem:** [CID 2478](https://pubchem.ncbi.nlm.nih.gov/compound/2478)
- **molar mass:** 246.302 g/mol (C6H14O6S2) — DrugBank
- **groups:** approved, investigational

## About

Busulfan is an alkylating anticancer drug used to treat blood cancers such as chronic and acute myeloid leukemia, and as part of conditioning before stem cell transplantation. It remains an approved medicine, with an authorised product in the European Union, though it carries a boxed warning and is used mainly in specialist settings.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q348922](https://www.wikidata.org/wiki/Q348922) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:19 | 2:09 | 0/1/0 | 1/0/0 | 1/0/6 | 97,258/6,444 | einfracz / qwen3.8-27b | 8 | 2/8 | 8/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Lawson_2022_pediatric stem cell transplantation recipients](drugs/drug_busulfan/Busulfan_Lawson2022_reference.md) | — | 1-compartment (no model) | 0 | Lawson R et al., Population pharmacokinetic model for on…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12809](https://doi.org/10.1002/psp4.12809) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Philippe_2019_VOD](drugs/drug_busulfan/pd_Philippe_2019_VOD.md) | Veno-occlusive disease ← busulfan · stimulation effect | — | Philippe M et al., Maximal concentration of intravenous bu…, Bone marrow transplantation (2019) | [10.1038/s41409-018-0281-7](https://doi.org/10.1038/s41409-018-0281-7) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.">safety allele</span> | **CYP2C9** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Uppugunduri_2017](drugs/drug_busulfan/pgx_Uppugunduri_2017_CYP2C9_safety.md) | Uppugunduri CRS et al., The Association of Combined GSTM1 and C…, Frontiers in pharmacology (2017) | [10.3389/fphar.2017.00451](https://doi.org/10.3389/fphar.2017.00451) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **GSTA1** | `Q22` · CL | metabolism | [Ansari_2017](drugs/drug_busulfan/pgx_Ansari_2017_GSTA1_Q22.md) | Ansari M et al., GSTA1 diplotypes affect busulfan cleara…, Oncotarget (2017) | [10.18632/oncotarget.20310](https://doi.org/10.18632/oncotarget.20310) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **GSTM1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Ansari_2017](drugs/drug_busulfan/pgx_Ansari_2017_GSTM1_Q100.md) | Ansari M et al., GSTA1 diplotypes affect busulfan cleara…, Oncotarget (2017) | [10.18632/oncotarget.20310](https://doi.org/10.18632/oncotarget.20310) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **GSTP1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Ansari_2017](drugs/drug_busulfan/pgx_Ansari_2017_GSTP1_Q100.md) | Ansari M et al., GSTA1 diplotypes affect busulfan cleara…, Oncotarget (2017) | [10.18632/oncotarget.20310](https://doi.org/10.18632/oncotarget.20310) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **GSTA1** | `Q22` · CL | metabolism | [Ben_2024](drugs/drug_busulfan/pgx_Ben_2024_GSTA1_Q22.md) | Ben Hassine K et al., Pharmacokinetic Modeling and Simulation…, Transplantation and cellula… (2024) | [10.1016/j.jtct.2023.12.003](https://doi.org/10.1016/j.jtct.2023.12.003) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **GSTA1** | `Q88` · AUC | metabolism | [Seydoux_2023](drugs/drug_busulfan/pgx_Seydoux_2023_GSTA1_Q88.md) | Seydoux C et al., Effect of pharmacokinetics and pharmaco…, Bone marrow transplantation (2023) | [10.1038/s41409-023-01963-z](https://doi.org/10.1038/s41409-023-01963-z) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **GSTM1** | `Q22` · CL | formation | [Uppugunduri_2017](drugs/drug_busulfan/pgx_Uppugunduri_2017_GSTM1_Q22.md) | Uppugunduri CRS et al., The Association of Combined GSTM1 and C…, Frontiers in pharmacology (2017) | [10.3389/fphar.2017.00451](https://doi.org/10.3389/fphar.2017.00451) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=busulfan) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | brain | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP2C9` safety_allele, `CYP3A4` substrate, `GSTM1` metabolism/substrate, `GSTP1` metabolism/substrate | DrugBank actor |
| metabolism | lung | `GSTP1` metabolism/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: DNA (cross-linking/alkylation), GSTA1 (metabolism), GSTA1 (substrate), GSTA2 (substrate), MGST2 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 268 matched, 69 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_13 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lawson_2022.pdf` | Lawson R et al., Population pharmacokinetic model for on…, CPT: pharmacometrics & syst… (2022) | popPK | 10 | [10.1002/psp4.12809](https://doi.org/10.1002/psp4.12809) | [35611997](https://pubmed.ncbi.nlm.nih.gov/35611997) | The paper reports a population PK model for busulfan in humans with specific numeric values for clearance, volume of distribution, and variability included in the text. |
| `Takahashi_2022.pdf` | Takahashi T et al., Busulfan dose Recommendation in Inherit…, Transplantation and cellula… (2022) | popPK | 10 | [10.1016/j.jtct.2021.11.018](https://doi.org/10.1016/j.jtct.2021.11.018) | [34883294](https://pubmed.ncbi.nlm.nih.gov/34883294) | The paper describes a population pharmacokinetic model for busulfan in humans, but the specific numeric parameter values (clearance estimates, etc.) are not present in the provided text. |
| `Bartelink_2016.pdf` | Bartelink IH et al., Association of busulfan exposure with s…, The Lancet. Haematology (2016) | popPK | 8 | [10.1016/S2352-3026(16)30114-4](https://doi.org/10.1016/S2352-3026(16)30114-4) | [27746112](https://pubmed.ncbi.nlm.nih.gov/27746112) | The study discusses busulfan pharmacokinetics and AUC targets but reports clinical outcomes and exposure ranges rather than specific numeric values for PK parameters like CL or V. |
| `Ehrsson_1983.pdf` | Ehrsson H et al., Busulfan kinetics, Clinical pharmacology and t… (1983) | popPK | 8 | [10.1038/clpt.1983.134](https://doi.org/10.1038/clpt.1983.134) | [6574831](https://pubmed.ncbi.nlm.nih.gov/6574831) | The paper reports quantitative pharmacokinetic parameters (elimination rate constant, AUC) for busulfan in humans, but lacks volume of distribution or clearance values. |
| `Philippe_2019.pdf` | Philippe M et al., Maximal concentration of intravenous bu…, Bone marrow transplantation (2019) | popPK | 6 | [10.1038/s41409-018-0281-7](https://doi.org/10.1038/s41409-018-0281-7) | [30108322](https://pubmed.ncbi.nlm.nih.gov/30108322) | The paper reports a pharmacokinetic-pharmacodynamic analysis of busulfan in humans and mentions estimated PK parameters (Cmax, AUC), but the specific numeric parameter values (mean population estimates, clearance, volume) are not provided in the evidence text. |
| `He_2025.pdf` | He Z et al., Population Pharmacokinetics of Busulfan…, Pediatric blood & cancer (2025) | popPK | 5 | [10.1002/pbc.31969](https://doi.org/10.1002/pbc.31969) | [40781807](https://pubmed.ncbi.nlm.nih.gov/40781807) | The paper describes a population pharmacokinetic model for busulfan, but the specific numeric parameter estimates (CL, V, etc.) are not listed in the provided abstract or evidence text. |
| `Admiraal_2014.pdf` | Admiraal R et al., Towards evidence-based dosing regimens…, Archives of disease in chil… (2014) | pd | 5 | [10.1136/archdischild-2013-303721](https://doi.org/10.1136/archdischild-2013-303721) | [24356807](https://www.ncbi.nlm.nih.gov/pubmed/24356807) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Bartelink_2025.pdf` | Bartelink IH et al., Optimizing Allogeneic Hematopoietic Cel…, Transplantation and cellula… (2025) | pd | 5 | [10.1016/j.jtct.2025.07.008](https://doi.org/10.1016/j.jtct.2025.07.008) | [40759455](https://www.ncbi.nlm.nih.gov/pubmed/40759455) | metadata signals extractable PD data (PK/PD) |
| `Dalal_2010.pdf` | Dalal J et al., Busulfan in children: impact of develop…, Pediatric blood & cancer (2010) | pd | 5 | [10.1002/pbc.22296](https://doi.org/10.1002/pbc.22296) | [19953643](https://www.ncbi.nlm.nih.gov/pubmed/19953643) | metadata signals extractable PD data (exposure-response) |
| `Freise_2008.pdf` | Freise KJ et al., Pharmacodynamic modeling of the effect…, Journal of pharmacokinetics… (2008) | pd | 4 | [10.1007/s10928-008-9100-x](https://doi.org/10.1007/s10928-008-9100-x) | [18937059](https://www.ncbi.nlm.nih.gov/pubmed/18937059) | metadata signals extractable PD data (Pharmacodynamicmodel) |
| `Tessaro_2015.pdf` | Tessaro I et al., Transferability and inter-laboratory va…, Reproductive toxicology (El… (2015) | pd | 4 | [10.1016/j.reprotox.2015.01.001](https://doi.org/10.1016/j.reprotox.2015.01.001) | [25625651](https://www.ncbi.nlm.nih.gov/pubmed/25625651) | metadata signals extractable PD data (EC50) |
| `ten_2013.pdf` | ten Brink MH et al., Effect of genetic variants GSTA1 and CY…, Pharmacogenomics (2013) | pgx | 8 | [10.2217/pgs.13.159](https://doi.org/10.2217/pgs.13.159) | [24192117](https://www.ncbi.nlm.nih.gov/pubmed/24192117) | metadata signals extractable PGX data (CYP39A1, PK/PD-context) |
| `Dunn_2022.pdf` | Dunn A et al., Characterization of drug-drug interacti…, British journal of clinical… (2022) | pgx | 7 | [10.1111/bcp.15151](https://doi.org/10.1111/bcp.15151) | [34799882](https://www.ncbi.nlm.nih.gov/pubmed/34799882) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-07T16:18:12.927378+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Admiraal_2014 | irrelevant | 0 | 0 | no_text gate: only 119 chars of text extracted (&lt; 400) |
| PD | Admiraal_2014 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text or any numeric PD parameters, curves, or model results for busulfan. |
| popPK | Bartelink_2016 | relevant | 8 | 1 | The study discusses busulfan pharmacokinetics and AUC targets but reports clinical outcomes and exposure ranges rather than specific numeric values for PK parameters like CL or V. |
| popPK | Bartelink_2025 | irrelevant | 0 | 0 | no_text gate: only 88 chars of text extracted (&lt; 400) |
| PD | Bartelink_2025 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text or any numeric PD parameters, curves, or model results. |
| popPK | Bognàr_2024 | irrelevant | 3 | 2 | The paper uses a pre-validated population PK model to estimate exposure (AUC) for clinical outcome analysis but does not report new PK parameter estimates (CL, V, etc.) in the provided evidence. |
| PGx | Bradford_2020 | not_relevant | 5 | 2 | The study analyzed GST genotypes associated with busulfan metabolism but explicitly states that no single genetic finding predicted rapid versus slow clearance, reporting only the absence of a significant pharmacogenomic association. |
| PGx | Castelli_2024 | not_relevant | 0 | 0 | The paper is a case series describing clinical management of lung injury and does not report quantitative pharmacokinetic or pharmacodynamic data linked to specific gene variants. |
| popPK | Dalal_2010 | irrelevant | 0 | 0 | no_text gate: only 83 chars of text extracted (&lt; 400) |
| PD | Dalal_2010 | not_relevant | 0 | 0 | The provided text contains only the title of the paper and lacks the full text, abstract, or data required to determine if numeric PD parameters or exposure-response relationships are reported. |
| PGx | Dunn_2022 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (concomitant medications) rather than pharmacogenomic variants or genotypes. |
| PGx | Fishleder_1992 | not_relevant | 0 | 0 | The paper reports the incidence of mixed chimerism (a clinical outcome/safety parameter) but does not analyze the impact of gene variants on pharmacokinetic or pharmacodynamic parameters of busulfan. |
| popPK | Freise_2008 | irrelevant | 0 | 0 | no_text gate: only 111 chars of text extracted (&lt; 400) |
| PD | Freise_2008 | not_relevant | 0 | 0 | The paper discusses general pharmacodynamic modeling of cellular lifespan and environmental effects, but does not mention busulfan or provide any specific exposure-response data for it. |
| PGx | Goekkurt_2007 | not_relevant | 2 | 2 | The study reports associations between MTHFR/GST variants and clinical liver toxicity outcomes (bilirubin levels, SOS occurrence) rather than specific pharmacokinetic or pharmacodynamic parameters of busulfan itself. |
| PGx | Gomez-Ospina_2025 | not_relevant | 0 | 0 | The study focuses on gene therapy for Gaucher disease and only uses busulfan as a myeloablative conditioning agent without analyzing its pharmacokinetics or pharmacodynamics. |
| popPK | Gu_2018 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity assay using 30 compounds including busulfan as a test compound, reporting no pharmacokinetic parameters (CL, V, ka, etc.). |
| PD | Gu_2018 | not_relevant | 0 | 0 | The paper reports in vitro cytotoxicity (EC20) for busulfan, which is a pharmacological potency metric, not a pharmacodynamic (exposure-response) relationship in a biological system or patient population. |
| popPK | He_2025 | relevant | 5 | 0 | The paper describes a population pharmacokinetic model for busulfan, but the specific numeric parameter estimates (CL, V, etc.) are not listed in the provided abstract or evidence text. |
| popPK | Hendricks_1991 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for hepsulfam, not busulfan, which is only mentioned as a structural comparator. |
| popPK | Joerger_2012 | irrelevant | 1 | 0 | The paper is a review article discussing covariate modeling in general and mentions busulfan as an example, but it does not present original quantitative disposition parameters or specific numeric values for busulfan in the provided text. |
| PGx | Joerger_2012 | not_relevant | 2 | 0 | This is a general review article about covariate pharmacokinetic modeling methods; it does not present new quantitative pharmacogenomic findings specifically for busulfan. |
| PGx | Kiladjian_2024 | not_relevant | 0 | 0 | The paper describes a clinical trial for ropeginterferon alfa-2b and makes no mention of pharmacogenomic effects on the PK/PD of busulfan. |
| PGx | Kwiatkowski_2024 | not_relevant | 0 | 0 | The paper reports outcomes of gene therapy for beta-thalassemia and mentions busulfan conditioning, but does not analyze the impact of gene variants on busulfan pharmacokinetics or pharmacodynamics. |
| PGx | Law_2012 | not_relevant | 0 | 0 | The paper reports clinical outcomes of a conditioning regimen in HSCT but contains no data on pharmacogenomic variants affecting busulfan PK or PD parameters. |
| PGx | Locatelli_2022 | not_relevant | 0 | 0 | The paper reports on a gene therapy efficacy study where busulfan was used for myeloablation, but it does not investigate how specific genetic variants affect busulfan's pharmacokinetics or pharmacodynamics. |
| PGx | Lum_2026 | not_relevant | 1 | 2 | The paper studies the drug treosulfan, not busulfan, and does not report pharmacokinetic or pharmacodynamic parameters of busulfan. |
| popPK | Mahmood_2020 | irrelevant | 1 | 0 | This is a methodological study on extrapolating clearance that uses busulfan only as one of ten test cases, and no specific numeric busulfan parameter values (CL, V, etc.) are provided in the evidence. |
| PD | Mahmood_2020 | not_relevant | 0 | 0 | The paper focuses on pharmacokinetic (clearance) maturation and allometric scaling models, not pharmacodynamic (exposure-response or dose-response) relationships. |
| popPK | McCune_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of fludarabine (lymphosuppression), and busulfan is only mentioned as a co-administered conditioning agent without specific busulfan PK parameters being reported. |
| PGx | McCune_2023 | not_relevant | 0 | 0 | The study predicts busulfan clearance using endogenous metabolomic compounds (pharmacometabolomics) and explicitly argues against using pharmacogenomics for dosing, reporting no gene variant effects. |
| popPK | Migliavacca_2024 | irrelevant | 0 | 0 | The paper is a clinical safety and efficacy study for gene therapy in ADA-SCID patients and does not report quantitative pharmacokinetic parameters for busulfan. |
| PGx | Mirza_2025 | not_relevant | 0 | 0 | The paper reports clinical outcomes and adverse events of gene therapy using busulfan conditioning but does not analyze the impact of specific gene variants on busulfan pharmacokinetics or pharmacodynamics. |
| PGx | Paioli_2014 | not_relevant | 0 | 0 | The paper examines the influence of sex and age (clinical/demographic factors) on toxicity, not gene variants or pharmacogenomic effects on busulfan PK/PD. |
| popPK | Philippe_2019 | relevant | 6 | 0 | The paper reports a pharmacokinetic-pharmacodynamic analysis of busulfan in humans and mentions estimated PK parameters (Cmax, AUC), but the specific numeric parameter values (mean population estimates, clearance, volume) are not provided in the evidence text. |
| popPK | Porta-Oltra_2021 | irrelevant | 1 | 0 | The paper is a non-systematic review that mentions busulfan only to state that personalized treatment yields similar benefit rates, without reporting any specific quantitative pharmacokinetic parameters for the drug. |
| PD | Porta-Oltra_2021 | not_relevant | 1 | 0 | The paper is a non-systematic literature review that qualitatively mentions busulfan in the context of therapeutic personalization but does not report specific numeric PD parameters or concentration-effect curves for busulfan. |
| PGx | Remy_2021 | not_relevant | 0 | 0 | The study reports that sickle cell disease does not significantly affect busulfan clearance and controls for GSTA1 polymorphisms, but it does not report a pharmacogenomic effect (genotype-dependent change) of busulfan. |
| PGx | Sun_2020 | not_relevant | 2 | 5 | The study explicitly concludes that GSTA1 genotype is not a clinically relevant predictive factor for busulfan clearance, accounting for only 1.1% of variability. |
| PGx | Sweiss_2019 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (busulfan and blinatumomab) mediated by cytokine-induced CYP3A4 suppression, not a pharmacogenomic effect driven by a specific gene variant or genotype. |
| popPK | Takahashi_2022 | relevant | 10 | 2 | The paper describes a population pharmacokinetic model for busulfan in humans, but the specific numeric parameter values (clearance estimates, etc.) are not present in the provided text. |
| popPK | Takahashi_2023 | irrelevant | 3 | 3 | The paper is a systematic review and simulation study that summarizes general model characteristics and reports median variabilities, but it does not provide the specific primary quantitative parameter estimates (e.g., mean CL, V, Ka) from an original population pharmacokinetic analysis required for extraction. |
| PGx | Takahashi_2023 | not_relevant | 5 | 2 | The paper is a systematic review that identifies GSTA1 as a common covariate in 15% of models but does not report specific fitted effect sizes or quantitative pharmacogenomic data for busulfan. |
| popPK | Tessaro_2015 | irrelevant | 0 | 0 | no_text gate: only 108 chars of text extracted (&lt; 400) |
| PD | Tessaro_2015 | not_relevant | 0 | 0 | The paper focuses on the transferability of an in vitro bovine oocyte fertilization test and does not report any pharmacodynamic or exposure-response data for busulfan. |
| PGx | Thompson_2018 | not_relevant | 0 | 0 | The paper reports efficacy outcomes for gene therapy in thalassemia but does not report any pharmacogenomic effects on the PK or PD of busulfan. |
| PGx | Uppugunduri_2017 | not_relevant | 5 | 5 | The study reports an association between genotypes and a clinical toxicity (hemorrhagic cystitis) and a metabolite level (sulfolane), but it does not provide quantitative fitted effect sizes for the pharmacokinetic or pharmacodynamic parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 16:18 UTC</sub>
