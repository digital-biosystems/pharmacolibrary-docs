<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L02B&quot;,&quot;href&quot;:&quot;atc/L02B.md&quot;},{&quot;label&quot;:&quot;anastrozole&quot;}]"></div>

# anastrozole

- **generic name:** anastrozole
- **ATC codes:** `L02BG03`
- **DrugBank:** [DB01217](https://go.drugbank.com/drugs/DB01217) · **PubChem:** [CID 2187](https://pubchem.ncbi.nlm.nih.gov/compound/2187)
- **molar mass:** 293.3663 g/mol (C17H19N5) — DrugBank
- **groups:** approved, investigational

## About

Anastrozole is an aromatase inhibitor used to treat breast cancer, including invasive ductal carcinoma. It is an approved medicine and appears on the WHO list of essential medicines, so it is widely used.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q419143](https://www.wikidata.org/wiki/Q419143) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:09 | 6:39 | 0/1/0 | 0/0/0 | 0/0/3 | 67,179/3,250 | einfracz / qwen3.8-27b | 8 | 0/8 | 8/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Yuan_2001_reference](drugs/drug_anastrozole/Anastrozole_Yuan2001_reference.md) | — | 1-compartment (no model) | 0 | Yuan J et al., Pharmacokinetics of anastrozole in Chin…, Acta pharmacologica Sinica (2001) | — |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **CSMD1** | `Q321` · EC50 | target | [Cairns_2020](drugs/drug_anastrozole/pgx_Cairns_2020_CSMD1_Q321.md) | Cairns J et al., Pharmacogenomics of aromatase inhibitor…, JCI insight (2020) | [10.1172/jci.insight.137571](https://doi.org/10.1172/jci.insight.137571) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **ALPPL2** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [Dudenkov_2019](drugs/drug_anastrozole/pgx_Dudenkov_2019_ALPPL2_Q100.md) | Dudenkov TM et al., Anastrozole Aromatase Inhibitor Plasma…, Clinical pharmacology and t… (2019) | [10.1002/cpt.1359](https://doi.org/10.1002/cpt.1359) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **SLC38A7** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [Dudenkov_2019](drugs/drug_anastrozole/pgx_Dudenkov_2019_SLC38A7_Q100.md) | Dudenkov TM et al., Anastrozole Aromatase Inhibitor Plasma…, Clinical pharmacology and t… (2019) | [10.1002/cpt.1359](https://doi.org/10.1002/cpt.1359) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=anastrozole) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor, `CYP2C8` inhibitor/substrate, `CYP2C9` inhibitor, `CYP3A4` inhibitor/substrate, `CYP3A5` substrate, `UGT1A3` substrate, `UGT1A4` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `CYP3A5` substrate, `UGT2B7` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| — | adipose tissue | `CYP19A1` inhibitor | DrugBank actor |
| — | ovary | `CYP19A1` inhibitor | DrugBank actor |
| — | testis | `CYP19A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ALPPL2 (transport), CSMD1 (target), SLC38A7 (transport).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 84 matched, 50 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_12 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Reinecke_2017.pdf` | Reinecke I et al., Model-Based Dose Selection for Intravag…, Journal of clinical pharmac… (2017) | popPK | 10 | [10.1002/jcph.846](https://doi.org/10.1002/jcph.846) | [27925651](https://pubmed.ncbi.nlm.nih.gov/27925651) | The study describes a population PK analysis for anastrozole in human women, but no numeric parameter values (CL, V, etc.) are present in the provided text. |
| `Yuan_2001.pdf` | Yuan J et al., Pharmacokinetics of anastrozole in Chin…, Acta pharmacologica Sinica (2001) | popPK | 9 | not captured | [11747767](https://pubmed.ncbi.nlm.nih.gov/11747767) | The study reports quantitative disposition parameters (T1/2beta, Cmax, AUC) derived from a two-compartment model for anastrozole in human subjects. |
| `Lu_2021.pdf` | Lu Y et al., Ribociclib Population Pharmacokinetics…, Journal of clinical pharmac… (2021) | pd | 5 | [10.1002/jcph.1856](https://doi.org/10.1002/jcph.1856) | [33713359](https://www.ncbi.nlm.nih.gov/pubmed/33713359) | metadata signals extractable PD data (PK/PD) |
| `Abubakar_2014.pdf` | Abubakar MB et al., The influence of genetic polymorphisms…, Pharmacogenetics and genomi… (2014) | pgx | 8 | [10.1097/FPC.0000000000000092](https://doi.org/10.1097/FPC.0000000000000092) | [25203739](https://www.ncbi.nlm.nih.gov/pubmed/25203739) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Gervasini_2017.pdf` | Gervasini G et al., Polymorphisms in ABCB1 and CYP19A1 gene…, British journal of clinical… (2017) | pgx | 8 | [10.1111/bcp.13130](https://doi.org/10.1111/bcp.13130) | [27747906](https://www.ncbi.nlm.nih.gov/pubmed/27747906) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Kusuhara_2017.pdf` | Kusuhara H et al., Comparison of pharmacokinetics of newly…, Drug metabolism and pharmac… (2017) | pgx | 7 | [10.1016/j.dmpk.2017.09.003](https://doi.org/10.1016/j.dmpk.2017.09.003) | [29137842](https://www.ncbi.nlm.nih.gov/pubmed/29137842) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Schwartzberg_2017.pdf` | Schwartzberg LS et al., A Phase I/Ib Study of Enzalutamide Alon…, Clinical cancer research :… (2017) | pgx | 7 | [10.1158/1078-0432.CCR-16-2339](https://doi.org/10.1158/1078-0432.CCR-16-2339) | [28280092](https://www.ncbi.nlm.nih.gov/pubmed/28280092) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Ventura_2012.pdf` | Ventura V et al., In vitro evaluation of the interaction…, Drug metabolism and disposi… (2012) | pgx | 7 | [10.1124/dmd.111.044271](https://doi.org/10.1124/dmd.111.044271) | [22451700](https://www.ncbi.nlm.nih.gov/pubmed/22451700) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Goetz_2013.pdf` | Goetz MP et al., CYP2D6 metabolism and patient outcome i…, Clinical cancer research :… (2013) | pgx | 5 | [10.1158/1078-0432.CCR-12-2153](https://doi.org/10.1158/1078-0432.CCR-12-2153) | [23213055](https://www.ncbi.nlm.nih.gov/pubmed/23213055) | metadata signals extractable PGX data (CYP2D6) |
| `Kamdem_2010.pdf` | Kamdem LK et al., In vitro and in vivo oxidative metaboli…, British journal of clinical… (2010) | pgx | 5 | [10.1111/j.1365-2125.2010.03791.x](https://doi.org/10.1111/j.1365-2125.2010.03791.x) | [21175441](https://www.ncbi.nlm.nih.gov/pubmed/21175441) | metadata signals extractable PGX data (CYP3A) |
| `Rae_2012.pdf` | Rae JM et al., CYP2D6 and UGT2B7 genotype and risk of…, Journal of the National Can… (2012) | pgx | 5 | [10.1093/jnci/djs126](https://doi.org/10.1093/jnci/djs126) | [22395643](https://www.ncbi.nlm.nih.gov/pubmed/22395643) | metadata signals extractable PGX data (CYP2D6) |
| `Rutherford_2023.pdf` | Rutherford DV et al., Effects of CYP3A4 and CYP2C9 genotype o…, Pharmacogenomics (2023) | pgx | 5 | [10.2217/pgs-2023-0097](https://doi.org/10.2217/pgs-2023-0097) | [37615099](https://www.ncbi.nlm.nih.gov/pubmed/37615099) | metadata signals extractable PGX data (CYP3A4) |

<sub>queue written 2026-10-06T22:09:12.415520+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Al-Rayess_2025 | irrelevant | 0 | 0 | This is a clinical outcome study focusing on height and bone age in children, reporting no pharmacokinetic parameters (CL, V, ka) for anastrozole. |
| PGx | Antoniou_2005 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions between antiretrovirals and antineoplastic agents, not the effect of a specific gene variant on anastrozole pharmacokinetics or pharmacodynamics. |
| PGx | Bojanic_2020 | not_relevant | 1 | 1 | The study analyzes allele frequencies and reports no significant association between CYP/UGT genotypes and anastrozole-induced bone mineral density changes. |
| PGx | Borrie_2020 | not_relevant | 2 | 3 | The study reports genetic associations with a pharmacodynamic adverse event (arthralgia), not with pharmacokinetic (PK) parameters or primary pharmacodynamic (PD) efficacy/therapeutic endpoints. |
| PGx | Cairns_2021 | not_relevant | 2 | 3 | The study reports genetic variants that differentiate the clinical efficacy (Breast Cancer Free Interval) of anastrozole versus exemestane, but it does not report a specific pharmacokinetic or pharmacodynamic parameter (e.g., drug concentration, estradiol levels) of anastrozole altered by the genotype. |
| PGx | Hertz_2017_2 | not_relevant | 0 | 0 | The study investigates pharmacokinetic and pharmacodynamic relationships for exemestane and letrozole, but explicitly excludes anastrozole from the patient population and analysis. |
| PGx | Kamdem_2010 | not_relevant | 1 | 1 | The study focuses on in vitro and in vivo oxidative metabolism and glucuronidation of anastrozole, but does not report pharmacogenomic effects (gene variants changing PK/PD). |
| PGx | Kusuhara_2017 | not_relevant | 0 | 0 | The study investigates the pharmacokinetics of cetrozole and TMD-322 in healthy Japanese subjects and mentions inter-individual variability but does not report specific pharmacogenomic effects (gene variant associations) on the PK parameters of anastrozole. |
| PGx | Lazarus_2010 | not_relevant | 1 | 0 | The provided text is an introductory summary focusing on the role of UGT enzymes but does not report specific gene variant effects on PK/PD parameters for anastrozole. |
| PGx | Linardi_2017 | not_relevant | 3 | 2 | The paper discusses known polymorphisms in CYP2A6/UGTs and their theoretical impact on anastrozole PK, but explicitly states that the clinical significance and impact on therapeutic effects are not clarified and require additional studies, rather than reporting a specific observed effect. |
| PGx | Liu_2013 | not_relevant | 0 | 0 | The study reports associations between CYP19A1 genotypes and clinical outcomes (time to progression, survival) but does not report changes in pharmacokinetic (e.g., AUC, Cmax) or pharmacodynamic (e.g., estradiol levels, Ki-67) parameters of anastrozole. |
| popPK | Lu_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ribociclib; anastrozole is only mentioned as a co-administered agent to check for interaction effects. |
| popPK | McCormack_2008 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of fulvestrant, with anastrozole mentioned only as a comparator in the background. |
| popPK | Melnyk_2026 | irrelevant | 0 | 0 | The study is a secondary analysis of quality of life and role function in breast cancer patients, containing no pharmacokinetic data for anastrozole. |
| popPK | Minhas_2026 | irrelevant | 0 | 0 | The paper is a clinical trial of anastrozole in pulmonary arterial hypertension focusing on physical activity outcomes, not pharmacokinetics, and contains no PK parameter values. |
| PGx | Muhammad_2016 | not_relevant | 2 | 1 | This is a general review of metabolism and toxicity of breast cancer drugs; it mentions interindividual variation and pharmacogenetics only in a broad context without reporting specific quantitative genotype-phenotype associations for anastrozole PK/PD parameters. |
| PGx | Niravath_2018 | not_relevant | 2 | 0 | The paper reports an association between VDR genotype and the incidence of arthralgia (adverse event) and IL-1beta levels, but does not report pharmacokinetic (PK) or direct pharmacodynamic (PD) parameters (e.g., estradiol levels, drug concentration) of anastrozole. |
| popPK | Park_2017 | irrelevant | 0 | 0 | The paper is a simulation study of treatment efficacy (survival hazard ratios) and does not report pharmacokinetic parameters for anastrozole. |
| PGx | Park_2017 | not_relevant | 1 | 10 | The paper models the treatment effect (efficacy/DFS) of aromatase inhibitors compared to tamoxifen based on CYP2D6 genotype, which is a pharmacodynamic outcome regarding disease response, not a change in the pharmacokinetic or pharmacodynamic parameters of anastrozole itself (like exposure or target inhibition). |
| PGx | Rae_2012 | not_relevant | 0 | 0 | The paper focuses on tamoxifen, not anastrozole. |
| popPK | Reinecke_2017 | relevant | 10 | 0 | The study describes a population PK analysis for anastrozole in human women, but no numeric parameter values (CL, V, etc.) are present in the provided text. |
| popPK | Robertson_2004 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of fulvestrant, with anastrozole serving only as a comparator treatment in the trial design. |
| PGx | Schwartzberg_2017 | not_relevant | 0 | 0 | The paper discusses Enzalutamide, not Anastrozole. |
| popPK | Tan_2013 | irrelevant | 0 | 0 | The paper is a meta-analysis of clinical efficacy (PFS, OS, response rates) and contains no pharmacokinetic parameters. |
| PGx | Turkistani_2012 | not_relevant | 0 | 0 | This is a review article describing the general field of pharmacogenomics for aromatase inhibitors and does not report specific quantitative experimental data or fitted effect sizes for anastrozole. |
| PGx | Untch_2010 | not_relevant | 0 | 0 | The text discusses general clinical practice guidelines for anastrozole and other aromatase inhibitors but contains no information on genetic variants or pharmacogenomic effects on PK/PD parameters. |
| PGx | Ventura_2012 | not_relevant | 0 | 0 | The paper focuses on the in vitro interaction potential of irosustat with drug-metabolizing enzymes and does not involve anastrozole or report pharmacogenomic effects on its PK/PD parameters. |
| PGx | Yang_2021 | not_relevant | 5 | 2 | The text is a narrative review mentioning that CYP19A1 polymorphisms influence the treatment efficacy of aromatase inhibitors (like anastrozole), but it does not report original quantitative pharmacokinetic or pharmacodynamic data or fitted effect sizes for these specific pharmacogenomic associations in this paper. |
| PGx | Zhang_2018 | not_relevant | 0 | 0 | The study investigates drug-herb interactions (psoralen on anastrozole PK) and does not report any effects of a gene variant or genotype. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 22:09 UTC</sub>
