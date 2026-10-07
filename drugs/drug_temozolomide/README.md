<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01A&quot;,&quot;href&quot;:&quot;atc/L01A.md&quot;},{&quot;label&quot;:&quot;temozolomide&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Temozolomide_Bsker2022_reference&quot;,&quot;label&quot;:&quot;B\u00fcsker_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_temozolomide/Temozolomide_Bsker2022_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Temozolomide_Panetta2003_reference&quot;,&quot;label&quot;:&quot;Panetta_2003_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_temozolomide/Temozolomide_Panetta2003_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# temozolomide

- **generic name:** temozolomide
- **ATC codes:** `L01AX03`
- **DrugBank:** [DB00853](https://go.drugbank.com/drugs/DB00853) · **PubChem:** [CID 5394](https://pubchem.ncbi.nlm.nih.gov/compound/5394)
- **molar mass:** 194.1508 g/mol (C6H6N6O2) — DrugBank
- **groups:** approved, investigational

## About

Temozolomide is an alkylating anticancer drug used to treat brain cancers such as glioblastoma, anaplastic astrocytoma and other gliomas, as well as melanoma. It is an approved medicine with several authorised products in the European Union, where it is used for glioma and neuroblastoma, and it is also being investigated for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q425088](https://www.wikidata.org/wiki/Q425088) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| temozolomide | parent | 194.151 | C6H6N6O2 | DrugBank | [5394](https://pubchem.ncbi.nlm.nih.gov/compound/5394) | Büsker_2022, Ostermann_2004, Panetta_2003 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:31 | 8:58 | 2/2/0 | 0/0/0 | 0/0/7 | 305,197/47,175 | einfracz / qwen3.8-27b | 17 | 4/13 | 15/2 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.938). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Büsker_2022_reference](drugs/drug_temozolomide/Temozolomide_Bsker2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 5 | Büsker S et al., Pharmacokinetics of metronomic temozolo…, Cancer chemotherapy and pha… (2022) | [10.1007/s00280-022-04424-4](https://doi.org/10.1007/s00280-022-04424-4) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Panetta_2003_reference](drugs/drug_temozolomide/Temozolomide_Panetta2003_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Panetta JC et al., Population pharmacokinetics of temozolo…, Cancer chemotherapy and pha… (2003) | [10.1007/s00280-003-0670-4](https://doi.org/10.1007/s00280-003-0670-4) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Jen_2000_reference](drugs/drug_temozolomide/Temozolomide_Jen2000_reference.md) | — | 1-compartment (no model) | 0 | Jen JF et al., Population pharmacokinetics of temozolo…, Pharmaceutical research (2000) | [10.1023/a:1026403805756](https://doi.org/10.1023/a:1026403805756) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Ostermann_2004_reference](drugs/drug_temozolomide/Temozolomide_Ostermann2004_reference.md) | — | 1-compartment (no model) | 8 | Ostermann S et al., Plasma and cerebrospinal fluid populati…, Clinical cancer research :… (2004) | [10.1158/1078-0432.CCR-03-0807](https://doi.org/10.1158/1078-0432.CCR-03-0807) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **ERCC1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Guerra_2024](drugs/drug_temozolomide/pgx_Guerra_2024_ERCC1_Q100.md) | Guerra G et al., Functional germline variants in DNA dam…, medRxiv : the preprint serv… (2024) | [10.1101/2023.10.13.23296963](https://doi.org/10.1101/2023.10.13.23296963) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **ERCC2** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Guerra_2024](drugs/drug_temozolomide/pgx_Guerra_2024_ERCC2_Q100.md) | Guerra G et al., Functional germline variants in DNA dam…, medRxiv : the preprint serv… (2024) | [10.1101/2023.10.13.23296963](https://doi.org/10.1101/2023.10.13.23296963) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **MLH1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Guerra_2024](drugs/drug_temozolomide/pgx_Guerra_2024_MLH1_Q100.md) | Guerra G et al., Functional germline variants in DNA dam…, medRxiv : the preprint serv… (2024) | [10.1101/2023.10.13.23296963](https://doi.org/10.1101/2023.10.13.23296963) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **MSH2** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Guerra_2024](drugs/drug_temozolomide/pgx_Guerra_2024_MSH2_Q100.md) | Guerra G et al., Functional germline variants in DNA dam…, medRxiv : the preprint serv… (2024) | [10.1101/2023.10.13.23296963](https://doi.org/10.1101/2023.10.13.23296963) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **MSH3** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Guerra_2024](drugs/drug_temozolomide/pgx_Guerra_2024_MSH3_Q100.md) | Guerra G et al., Functional germline variants in DNA dam…, medRxiv : the preprint serv… (2024) | [10.1101/2023.10.13.23296963](https://doi.org/10.1101/2023.10.13.23296963) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **MSH4** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Guerra_2024](drugs/drug_temozolomide/pgx_Guerra_2024_MSH4_Q100.md) | Guerra G et al., Functional germline variants in DNA dam…, medRxiv : the preprint serv… (2024) | [10.1101/2023.10.13.23296963](https://doi.org/10.1101/2023.10.13.23296963) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **MUTYH** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Guerra_2024](drugs/drug_temozolomide/pgx_Guerra_2024_MUTYH_Q100.md) | Guerra G et al., Functional germline variants in DNA dam…, medRxiv : the preprint serv… (2024) | [10.1101/2023.10.13.23296963](https://doi.org/10.1101/2023.10.13.23296963) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=temozolomide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| metabolism | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: DNA (cross-linking/alkylation), ERCC1 (target), ERCC2 (target), MLH1 (target), MSH2 (target), MSH3 (target), MSH4 (target), MUTYH (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 192 matched, 60 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 4  ·  extracted 2  ·  needs_review 0  ·  rejected 2  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_8 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jen_2000.pdf` | Jen JF et al., Population pharmacokinetics of temozolo…, Pharmaceutical research (2000) | popPK | 10 | [10.1023/a:1026403805756](https://doi.org/10.1023/a:1026403805756) | [11145236](https://pubmed.ncbi.nlm.nih.gov/11145236) | The abstract explicitly reports population pharmacokinetic parameters including clearance values (11.2 and 8.8 L/hr) and variability for temozolomide in human patients. |
| `Ostermann_2004.pdf` | Ostermann S et al., Plasma and cerebrospinal fluid populati…, Clinical cancer research :… (2004) | popPK | 10 | [10.1158/1078-0432.CCR-03-0807](https://doi.org/10.1158/1078-0432.CCR-03-0807) | [15173079](https://pubmed.ncbi.nlm.nih.gov/15173079) | The abstract explicitly reports quantitative population PK parameters (CL, VD, Ka, half-life) for temozolomide in humans. |
| `Panetta_2003.pdf` | Panetta JC et al., Population pharmacokinetics of temozolo…, Cancer chemotherapy and pha… (2003) | popPK | 10 | [10.1007/s00280-003-0670-4](https://doi.org/10.1007/s00280-003-0670-4) | [13680158](https://pubmed.ncbi.nlm.nih.gov/13680158) | The paper is a population PK study of temozolomide in children that explicitly reports quantitative values for CL/F, Vc/F, Cmax, and MTIC AUC in the abstract/results text. |
| `League-Pascual_2017.pdf` | League-Pascual JC et al., Plasma and cerebrospinal fluid pharmaco…, Journal of neuro-oncology (2017) | popPK | 8 | [10.1007/s11060-017-2388-x](https://doi.org/10.1007/s11060-017-2388-x) | [28290002](https://pubmed.ncbi.nlm.nih.gov/28290002) | Study reports non-compartmental PK parameters (CSF:plasma AUC ratio) for temozolomide in rhesus macaques, but specific numeric values for CL, V, or half-life are not explicitly provided in the text evidence. |
| `Singh_2019.pdf` | Singh R et al., Population pharmacokinetics and exposur…, Cancer chemotherapy and pha… (2019) | pd | 5 | [10.1007/s00280-018-3731-4](https://doi.org/10.1007/s00280-018-3731-4) | [30456480](https://www.ncbi.nlm.nih.gov/pubmed/30456480) | metadata signals extractable PD data (exposure-response) |
| `Reardon_2008.pdf` | Reardon DA et al., Safety and pharmacokinetics of dose-int…, Neuro-oncology (2008) | pgx | 7 | [10.1215/15228517-2008-003](https://doi.org/10.1215/15228517-2008-003) | [18359865](https://www.ncbi.nlm.nih.gov/pubmed/18359865) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Song_2022.pdf` | Song YK et al., Role of the efflux transporters Abcb1 a…, European journal of pharmac… (2022) | pgx | 7 | [10.1016/j.ejps.2022.106177](https://doi.org/10.1016/j.ejps.2022.106177) | [35341895](https://www.ncbi.nlm.nih.gov/pubmed/35341895) | metadata signals extractable PGX data (Abcb1, PK/PD-context) |
| `Malmström_2020.pdf` | Malmström A et al., ABCB1 single-nucleotide variants and su…, The pharmacogenomics journal (2020) | pgx | 5 | [10.1038/s41397-019-0107-z](https://doi.org/10.1038/s41397-019-0107-z) | [31624332](https://www.ncbi.nlm.nih.gov/pubmed/31624332) | metadata signals extractable PGX data (ABCB1) |

<sub>queue written 2026-10-07T16:23:08.434613+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ahn_2024 | not_relevant | 5 | 0 | The paper reports a pharmacogenomic association with tumor response (clinical outcome) rather than a specific pharmacokinetic (PK) or pharmacodynamic (PD) parameter (e.g., concentration, enzyme activity, receptor binding). |
| PGx | Arora_2026 | not_relevant | 1 | 1 | The paper studies the molecular mechanisms of overcoming drug resistance to Temozolomide using a chemosensitizer, but does not report pharmacogenomic effects on specific PK or PD parameters. |
| popPK | Ballesta_2014 | relevant | 8 | 4 | The paper presents a quantitative PBPK model for temozolomide with specific numeric values for transport rates, volumes, and AUC ratios, although many detailed parameter estimates (Table 1) are referenced but not fully displayed in the text. |
| PGx | Bassi_2023 | not_relevant | 1 | 2 | The paper investigates the role of EGFRvIII overexpression (protein level) and ceramide metabolism in cellular response to temozolomide, but does not report a specific gene variant or genotype affecting a PK or PD parameter. |
| PGx | Bernal_2018 | not_relevant | 0 | 0 | The paper investigates survival prediction in glioblastoma using multi-omic profiles but does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of temozolomide. |
| PGx | Brown_2014 | not_relevant | 4 | 3 | The study reports suggestive genomic associations with cytotoxic response (PD) in cell lines for temozolomide and its drug family, but it is an association study rather than a report of a specific gene variant's effect size on a PK/PD parameter in patients. |
| popPK | Chen_2026 | irrelevant | 0 | 0 | The paper is a mechanistic modeling study where temozolomide serves as a co-administered comparator drug to a PARP inhibitor, and no original quantitative PK parameters for temozolomide are reported in the text. |
| PD | Chen_2026 | not_relevant | 3 | 1 | The paper describes a simulation framework using literature-derived parameters for temozolomide but does not report new experimental data or specific numeric PD parameters (e.g., Emax, EC50) for temozolomide in the provided text. |
| popPK | Clarion_2012 | irrelevant | 0 | 0 | The paper focuses on the in-vitro antiproliferative activity of a new compound (3.1a) compared to temozolomide, with no pharmacokinetic parameters reported. |
| PD | Clarion_2012 | not_relevant | 1 | 1 | The paper reports an EC50 for a new compound (3.1a) and qualitatively compares its potency to temozolomide, but does not provide a PD model, exposure-response relationship, or numeric PD parameters for temozolomide itself. |
| PGx | Dellinger_2012 | not_relevant | 0 | 0 | The paper investigates UGT enzyme expression changes induced by anti-cancer drugs but does not report genetic variants altering the PK/PD of temozolomide. |
| PGx | Dréan_2018 | not_relevant | 0 | 0 | The paper discusses ABC transporter expression in glioblastoma but does not report any pharmacogenomic effects on the PK or PD parameters of temozolomide. |
| popPK | Gowda_2017 | irrelevant | 0 | 0 | The paper studies honokiol's effect on DNA polymerases and cytotoxicity of bleomycin/temozolomide combinations in cancer cells, containing no PK disposition parameters. |
| PD | Gowda_2017 | not_relevant | 3 | 2 | The paper reports a 3-fold decrease in EC50 for temozolomide in the presence of honokiol, but this is a qualitative/relative change in sensitivity rather than a direct exposure-response or dose-response curve for temozolomide itself with defined PD parameters (like Emax or EC50 of TMZ alone vs concentration). |
| PGx | Hu_2025 | not_relevant | 5 | 2 | The paper explores the mechanism of CYP3A5-mediated temozolomide resistance (PD) but focuses on expression levels in stem cells rather than a specific genetic variant (pharmacogenomics) or direct PK parameters. |
| PGx | Isakova_2025 | not_relevant | 0 | 0 | The paper reports gene expression changes and cellular mechanisms in response to temozolomide, but does not report pharmacogenomic effects on PK or PD parameters. |
| PGx | Jang_2023 | not_relevant | 0 | 0 | The paper identifies prognostic genes and tumor microenvironment features in GBM patients treated with temozolomide but does not report pharmacokinetic or pharmacodynamic parameters or genotype-specific drug effects. |
| popPK | Jiménez_2024 | irrelevant | 0 | 0 | This is an in vitro mechanistic study focusing on ALDH inhibition and glioblastoma cell resistance to temozolomide; it reports cytotoxicity (EC50) and enzyme activity but no pharmacokinetic disposition parameters (CL, V, ka, etc.) for temozolomide. |
| PGx | Kim_2025 | not_relevant | 2 | 2 | The paper investigates a biological mechanism of drug resistance involving gene expression (KDM4C/E2F6) but does not report a genetic variant or genotype that modifies a standard pharmacokinetic (PK) or pharmacodynamic (PD) parameter of temozolomide in humans or a defined model. |
| popPK | League-Pascual_2017 | relevant | 8 | 2 | Study reports non-compartmental PK parameters (CSF:plasma AUC ratio) for temozolomide in rhesus macaques, but specific numeric values for CL, V, or half-life are not explicitly provided in the text evidence. |
| PGx | Li_2026 | not_relevant | 0 | 0 | The study investigates the effects of a Traditional Chinese Medicine formula (SJZT) on pharmacodynamics and toxicity, not the impact of human genetic variants (pharmacogenomics) on temozolomide PK/PD. |
| PGx | Lyu_2026 | not_relevant | 0 | 0 | The paper investigates a gene expression signature and TIMP1-mediated resistance to temozolomide, rather than a specific genetic variant or polymorphism affecting pharmacokinetic or pharmacodynamic parameters. |
| PGx | Ma_2012 | not_relevant | 0 | 0 | The paper develops an in vitro tissue model system to test drug cytotoxicity and metabolism using cell lines with specific CYP subtypes, but it does not report human pharmacogenomic variants (genotypes) affecting the PK or PD parameters of temozolomide. |
| PGx | Malmström_2020 | not_relevant | 0 | 0 | The paper reports an association between ABCB1 variants and overall survival, but it does not report or model a specific pharmacokinetic or pharmacodynamic parameter of temozolomide. |
| popPK | Meco_2014 | irrelevant | 0 | 0 | The study focuses on the cytotoxic efficacy and mechanism of action (cell cycle, MGMT) of temozolomide in ependymoma cells, reporting IC50/EC50 values rather than pharmacokinetic disposition parameters (CL, V, Ka). |
| PGx | Min_2022 | not_relevant | 0 | 0 | The study investigates cell lines and stem cell markers (CD133, Nestin, ABCG2) associated with acquired resistance, but it does not report genetic polymorphisms or genotypes affecting temozolomide pharmacokinetics or pharmacodynamics. |
| popPK | Mittapalli_2019 | irrelevant | 0 | 0 | The study focuses on the population pharmacokinetics of depatuxizumab mafodotin, with temozolomide only mentioned as a co-administered therapy. |
| popPK | Nelson_2025 | irrelevant | 2 | 0 | The paper is an in vitro mechanistic study on chronotherapy and PK-PD modeling of efficacy, not a quantitative pharmacokinetic study reporting disposition parameters (CL, V, ka) for temozolomide. |
| PGx | Park_2025 | not_relevant | 0 | 0 | The paper characterizes gliosarcoma organoids and their general response to temozolomide but does not report a specific pharmacogenomic effect (e.g., MGMT status) on a PK or PD parameter. |
| popPK | Proto_2022 | irrelevant | 0 | 0 | The paper is an in vitro mechanistic study on chemosensitization by modified adenosines, reporting no quantitative pharmacokinetic parameters for temozolomide. |
| PGx | Reardon_2008 | not_relevant | 0 | 0 | The paper reports PK changes in patients taking CYP3A4-inducing drugs (phenotype), but does not report specific genetic variants or genotypes associated with the PK/PD parameters. |
| PGx | Rodrigues-Junior_2022 | not_relevant | 0 | 0 | The paper evaluates the in vitro efficacy of novel compounds (A5, C1, APO) in combination with temozolomide, focusing on cytotoxicity and stemness, without reporting pharmacogenomic effects (gene variants changing TMZ PK/PD). |
| popPK | Salem_2014 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for veliparib, with temozolomide serving only as a co-administered comparator/diagnostic agent, not the subject drug. |
| PGx | Silva_2023 | not_relevant | 0 | 0 | The study investigates the effect of polyunsaturated fatty acids on drug resistance mechanisms in cell lines, but does not report a pharmacogenomic effect (gene variant/genotype) on a PK or PD parameter of temozolomide. |
| popPK | Singh_2019 | irrelevant | 0 | 0 | no_text gate: only 142 chars of text extracted (&lt; 400) |
| PD | Singh_2019 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics and exposure-response of veliparib, not temozolomide, and does not report PD parameters for temozolomide. |
| PGx | Song_2022 | not_relevant | 0 | 0 | The paper focuses on the brain distribution of olaparib via transporters, and while temozolomide is mentioned as a co-treatment, the study does not report pharmacogenomic effects on temozolomide's PK or PD parameters. |
| PGx | Stepanenko_2016 | not_relevant | 0 | 0 | The study investigates drug resistance mechanisms via chromosomal instability in cell lines rather than the impact of a specific human germline gene variant on the PK/PD of temozolomide. |
| popPK | Tavener_2021 | irrelevant | 0 | 0 | The study investigates the in-vitro cytotoxic effects of anthracyclines on glioma cells, with temozolomide mentioned only as a clinical comparator and no PK parameters reported. |
| PD | Tavener_2021 | not_relevant | 0 | 0 | The paper investigates the dose-response relationship of anthracyclines (doxorubicin, epirubicin, idarubicin), not temozolomide. |
| PGx | Tiek_2018 | not_relevant | 0 | 0 | The paper describes in vitro cell lines with acquired resistance to temozolomide (a phenotype) but does not report specific gene variants or genotypes altering PK or PD parameters. |
| PGx | Velpula_2017 | not_relevant | 0 | 0 | The paper investigates a metabolic mechanism (DCA/PDK1) for overcoming chemoresistance to temozolomide, but does not report pharmacogenomic effects of genetic variants on PK or PD parameters. |
| popPK | Wood_2022 | irrelevant | 2 | 0 | This is a computational modeling study of CSF flow using temozolomide as a hypothetical example, not a pharmacokinetic study reporting measured disposition parameters for temozolomide. |
| PGx | Yamashita_2019 | not_relevant | 2 | 0 | The paper compares diagnostic assay methods for detecting MGMT methylation status rather than reporting a pharmacokinetic or pharmacodynamic effect size of temozolomide driven by the genotype. |
| PGx | Zhang_2018 | not_relevant | 0 | 0 | The study investigates mechanisms of drug resistance involving the ROCK2 pathway and a small molecule inhibitor (fasudil), not the impact of a human gene variant/genotype on pharmacokinetics or pharmacodynamics. |
| PGx | de_2018 | not_relevant | 0 | 0 | The study involves animal models (mice) and transporter knockouts, not human pharmacogenomics or gene variants affecting temozolomide PK/PD. |
| PGx | de_2018_2 | not_relevant | 0 | 0 | The paper studies the pharmacokinetics of the PARP inhibitor AZD2461, not temozolomide. |
| PGx | de_2026 | not_relevant | 0 | 0 | The paper investigates the effect of transporter gene knockout on the pharmacokinetics of the MPS1 inhibitor NTRC 0066-0, not the pharmacokinetic or pharmacodynamic parameters of temozolomide. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 16:29 UTC</sub>
