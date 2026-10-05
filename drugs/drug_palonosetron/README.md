<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A04A&quot;,&quot;href&quot;:&quot;atc/A04A.md&quot;},{&quot;label&quot;:&quot;palonosetron&quot;}]"></div>

# palonosetron

- **generic name:** palonosetron
- **ATC codes:** `A04AA05`
- **DrugBank:** [DB00377](https://go.drugbank.com/drugs/DB00377) · **PubChem:** [CID 6337614](https://pubchem.ncbi.nlm.nih.gov/compound/6337614)
- **molar mass:** 296.414 g/mol (C19H24N2O) — DrugBank
- **groups:** approved, investigational

## About

Palonosetron is a serotonin antagonist antiemetic used to prevent nausea and vomiting, including that caused by cancer treatment. It is an approved medicine, with products authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q419841](https://www.wikidata.org/wiki/Q419841) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| fosrolapitant | metabolite | 654.497 | C27H29F6N2O8P | PubChem | [163871173](https://pubchem.ncbi.nlm.nih.gov/compound/163871173) | Li_2026 |
| rolapitant | metabolite | 500.483 | C25H26F6N2O2 | PubChem | [10311306](https://pubchem.ncbi.nlm.nih.gov/compound/10311306) | Li_2026 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 14:31 | 9:10 | 0/1/3 | 0/0/0 | 0/0/5 | 130,728/28,642 | ollama / qwen3.8:27b-mtp-q8_0 | 10 | 1/9 | 9/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.077). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Li_2026_healthy_control](drugs/drug_palonosetron/Palonosetron_Li2026_healthy_control.md) | — | parent + metabolite (no model) | 5 | Li Q et al., Pharmacokinetics, safety, and populatio…, Frontiers in pharmacology (2026) | [10.3389/fphar.2026.1833170](https://doi.org/10.3389/fphar.2026.1833170) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.077). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Li_2026_moderate_hepatic_impairment](drugs/drug_palonosetron/Palonosetron_Li2026_moderate_hepatic_impairment.md) | — | parent + metabolite (no model) | 5 | Li Q et al., Pharmacokinetics, safety, and populatio…, Frontiers in pharmacology (2026) | [10.3389/fphar.2026.1833170](https://doi.org/10.3389/fphar.2026.1833170) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.7). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: model_quarantined: Cl, Vd left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Li_2026_palonosetron](drugs/drug_palonosetron/Palonosetron_Li2026_palonosetron.md) | held back | 1-compartment, IV | 6 | Li Q et al., Pharmacokinetics, safety, and populatio…, Frontiers in pharmacology (2026) | [10.3389/fphar.2026.1833170](https://doi.org/10.3389/fphar.2026.1833170) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Lee_2019_reference](drugs/drug_palonosetron/Palonosetron_Lee2019_reference.md) | — | 1-compartment (no model) | 0 | Lee S et al., Population pharmacokinetics of palonose…, Journal of anesthesia (2019) | [10.1007/s00540-019-02641-5](https://doi.org/10.1007/s00540-019-02641-5) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **ABCB1** | `Q40` · Fab | transport | [Ribeiro_2024](drugs/drug_palonosetron/pgx_Ribeiro_2024_ABCB1_Q40.md) | Ribeiro AHS et al., CYP2D6 isoenzyme and ABCB1 gene polymor…, Brazilian journal of anesth… (2024) | [10.1016/j.bjane.2023.02.002](https://doi.org/10.1016/j.bjane.2023.02.002) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **CYP2D6** | `Q22` · CL | metabolism | [Ribeiro_2024](drugs/drug_palonosetron/pgx_Ribeiro_2024_CYP2D6_Q22.md) | Ribeiro AHS et al., CYP2D6 isoenzyme and ABCB1 gene polymor…, Brazilian journal of anesth… (2024) | [10.1016/j.bjane.2023.02.002](https://doi.org/10.1016/j.bjane.2023.02.002) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **HTR3A** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Yeo_2025](drugs/drug_palonosetron/pgx_Yeo_2025_HTR3A_Q100.md) | Yeo W et al., Personalized Prophylactic Antiemetic Re…, JCO precision oncology (2025) | [10.1200/PO-24-00858](https://doi.org/10.1200/PO-24-00858) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **HTR3B** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Yeo_2025](drugs/drug_palonosetron/pgx_Yeo_2025_HTR3B_Q100.md) | Yeo W et al., Personalized Prophylactic Antiemetic Re…, JCO precision oncology (2025) | [10.1200/PO-24-00858](https://doi.org/10.1200/PO-24-00858) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **TACR1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Yeo_2025](drugs/drug_palonosetron/pgx_Yeo_2025_TACR1_Q100.md) | Yeo W et al., Personalized Prophylactic Antiemetic Re…, JCO precision oncology (2025) | [10.1200/PO-24-00858](https://doi.org/10.1200/PO-24-00858) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=palonosetron) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` transport | paper PGx gene |
| absorption | kidney | `ABCB1` transport | paper PGx gene |
| absorption | liver | `ABCB1` transport | paper PGx gene |
| absorption | placenta | `ABCB1` transport | paper PGx gene |
| absorption | small intestine | `ABCB1` transport | paper PGx gene |
| absorption | testis | `ABCB1` transport | paper PGx gene |
| metabolism | brain | `CYP2D6` metabolism/substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2D6` metabolism/substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: HTR3A (target), HTR3B (target), TACR1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 46 matched, 41 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 4  ·  extracted 0  ·  needs_review 3  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lee_2019.pdf` | Lee S et al., Population pharmacokinetics of palonose…, Journal of anesthesia (2019) | popPK | 10 | [10.1007/s00540-019-02641-5](https://doi.org/10.1007/s00540-019-02641-5) | [30976908](https://pubmed.ncbi.nlm.nih.gov/30976908) | The study reports a population PK model for palonosetron in humans with specific numeric values for clearance and central volume of distribution provided in the abstract. |
| `Li_2012.pdf` | Li P et al., Liquid chromatography-electrospray quad…, Journal of chromatography.… (2012) | popPK | 8 | [10.1016/j.jchromb.2012.03.001](https://doi.org/10.1016/j.jchromb.2012.03.001) | [22465199](https://pubmed.ncbi.nlm.nih.gov/22465199) | The study describes a PK analysis of palonosetron in humans using a two-compartment model, but the specific numeric parameter values (CL, V, t1/2) are not listed in the provided text, only qualitative descriptions and urine excretion rates. |
| `Wang_2016.pdf` | Wang J et al., Exposure-Response of Palonosetron for P…, Journal of pediatric gastro… (2016) | popPK | 8 | [10.1097/MPG.0000000000001173](https://doi.org/10.1097/MPG.0000000000001173) | [26913757](https://pubmed.ncbi.nlm.nih.gov/26913757) | The study reports pharmacokinetic analyses and exposure-response data for palonosetron in pediatric patients, but specific quantitative parameter values (CL, V, etc.) are not explicitly listed in the provided text. |
| `Calcagnile_2013.pdf` | Calcagnile S et al., Effect of netupitant, a highly selectiv…, Supportive care in cancer :… (2013) | pgx | 7 | [10.1007/s00520-013-1857-9](https://doi.org/10.1007/s00520-013-1857-9) | [23748441](https://www.ncbi.nlm.nih.gov/pubmed/23748441) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Warr_2012.pdf` | Warr D, Management of highly emetogenic chemoth…, Current opinion in oncology (2012) | pgx | 7 | [10.1097/CCO.0b013e328352f6fb](https://doi.org/10.1097/CCO.0b013e328352f6fb) | [22476193](https://www.ncbi.nlm.nih.gov/pubmed/22476193) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Janicki_2005.pdf` | Janicki PK, Cytochrome P450 2D6 metabolism and 5-hy…, Medical science monitor : i… (2005) | pgx | 5 | not captured | [16192915](https://www.ncbi.nlm.nih.gov/pubmed/16192915) | metadata signals extractable PGX data (CYP2D6) |
| `Song_2017.pdf` | Song JW et al., Comparison of Ramosetron and Palonosetr…, Journal of neurosurgical an… (2017) | pgx | 5 | [10.1097/ANA.0000000000000361](https://doi.org/10.1097/ANA.0000000000000361) | [27564555](https://www.ncbi.nlm.nih.gov/pubmed/27564555) | metadata signals extractable PGX data (ABCB1) |

<sub>queue written 2026-10-04T14:23:02.124099+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Aapro_2010 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving aprepitant and palonosetron, not pharmacogenomic effects on palonosetron's PK/PD. |
| PGx | Calcagnile_2013 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (CYP3A4 inhibitors/inducers) rather than pharmacogenomic effects of gene variants on palonosetron PK/PD. |
| PGx | Davis_2016 | not_relevant | 0 | 0 | The text is a general review of antiemetic therapies and does not report any pharmacogenomic effects on palonosetron PK/PD. |
| popPK | Gil_2021 | irrelevant | 0 | 0 | The study is a clinical trial assessing the effect of palonosetron on remifentanil requirements for cough suppression, not a pharmacokinetic study of palonosetron. |
| PGx | Hamada_2024 | not_relevant | 0 | 0 | The paper is a case report on a drug-drug interaction involving oxycodone and aprepitant, with no mention of pharmacogenomics or specific PK/PD parameters for palonosetron. |
| PGx | Ho_2006 | not_relevant | 2 | 0 | The text is a review summary that mentions pharmacogenetic factors (CYP450, ABCB1, 5-HT3) generally but does not report specific quantitative effects of variants on palonosetron PK/PD parameters. |
| PGx | Janicki_2005 | not_relevant | 5 | 0 | The text is a qualitative review discussing the mechanism of CYP2D6 polymorphism affecting palonosetron efficacy, but it does not report specific quantitative PK/PD parameter changes or fitted effect sizes. |
| PGx | Lerman_2019 | not_relevant | 1 | 0 | The paper is a general review of pediatric ambulatory anesthesia that mentions palonosetron only as a future therapeutic option for PONV, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Li_2012 | relevant | 8 | 2 | The study describes a PK analysis of palonosetron in humans using a two-compartment model, but the specific numeric parameter values (CL, V, t1/2) are not listed in the provided text, only qualitative descriptions and urine excretion rates. |
| PGx | Moore_2025 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects for ondansetron, tropisetron, dolasetron, and ramosetron, but does not report PK or PD parameters for palonosetron. |
| PGx | Moore_2026 | not_relevant | 0 | 0 | The paper is a clinical guideline for CYP2D6 and 5-HT3 antagonists, but it does not report specific pharmacokinetic or pharmacodynamic effect sizes for palonosetron. |
| PGx | Natale_2016 | not_relevant | 0 | 0 | The paper reports drug-drug interactions involving netupitant and palonosetron, not pharmacogenomic effects (gene variants) on PK/PD parameters. |
| PGx | Navari_2015 | not_relevant | 0 | 0 | The paper describes the clinical profile and efficacy of the netupitant/palonosetron combination but does not report any pharmacogenomic effects on PK or PD parameters. |
| PGx | Pinilla_2025 | not_relevant | 0 | 0 | The paper is a case report on ifosfamide-induced encephalopathy and does not report any pharmacogenomic effects on palonosetron PK or PD parameters. |
| PGx | Rapoport_2017 | not_relevant | 0 | 0 | The paper is a general review of NK-1 receptor antagonists and does not report any pharmacogenomic effects on the PK or PD of palonosetron. |
| PGx | Rubenstein_2006 | not_relevant | 0 | 0 | The paper is a general review of CINV treatments and mentions pharmacogenomics only as a future direction without reporting specific gene-drug interactions or PK/PD data for palonosetron. |
| PGx | Shimamoto_2021 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics of dexamethasone and its interaction with fosaprepitant, not the pharmacogenomics of palonosetron. |
| PGx | Song_2017 | not_relevant | 2 | 5 | The paper reports a pharmacodynamic effect (PONV severity) for ramosetron, but for palonosetron, it only shows a lack of difference in nausea incidence and does not report a specific genotype-dependent change in palonosetron's PK or PD parameters. |
| PGx | Theodosopoulou_2023 | not_relevant | 2 | 0 | The paper states that ABCB1 polymorphisms did not affect palonosetron's efficacy, reporting a null result rather than a pharmacogenomic effect. |
| popPK | Thompson_2024 | irrelevant | 0 | 0 | The study models the pharmacokinetics of cisplatin (total platinum), not palonosetron, which is only a co-administered antiemetic comparator. |
| popPK | Thompson_2025 | irrelevant | 0 | 0 | The study models the pharmacokinetics of cisplatin (platinum), with palonosetron serving only as a comparator antiemetic agent. |
| PGx | Tsuji_2017 | not_relevant | 2 | 0 | The study reports no significant association between genetic polymorphisms and palonosetron efficacy, and does not report specific PK/PD parameter changes. |
| popPK | Wang_2016 | relevant | 8 | 2 | The study reports pharmacokinetic analyses and exposure-response data for palonosetron in pediatric patients, but specific quantitative parameter values (CL, V, etc.) are not explicitly listed in the provided text. |
| PD | Wang_2016 | not_relevant | 3 | 1 | The paper discusses exposure-response concepts and compares AUC and response rates between populations but does not report a fitted PD model or numeric PD parameters (e.g., Emax, EC50) in the provided text. |
| PGx | Warr_2012 | not_relevant | 0 | 0 | The paper is a clinical review of antiemetic management and does not report pharmacogenomic effects on palonosetron PK/PD. |
| PGx | Xiong_2019 | not_relevant | 0 | 0 | The study investigates the pharmacokinetic interaction between aprepitant and ifosfamide, not the effect of a gene variant on palonosetron. |
| PGx | Yokoi_2018 | not_relevant | 0 | 0 | The study investigates genetic risk factors for chemotherapy-induced nausea and vomiting (CINV) and antiemetic response, but does not report pharmacokinetic or pharmacodynamic parameters of palonosetron. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-04 14:23 UTC</sub>
