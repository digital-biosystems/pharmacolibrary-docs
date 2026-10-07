<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01E&quot;,&quot;href&quot;:&quot;atc/S01E.md&quot;},{&quot;label&quot;:&quot;latanoprost&quot;}]"></div>

# latanoprost

- **generic name:** latanoprost
- **ATC codes:** `S01EE01`, `S01EE51`, `S01EE52`
- **DrugBank:** [DB00654](https://go.drugbank.com/drugs/DB00654) · **PubChem:** [CID 5311221](https://pubchem.ncbi.nlm.nih.gov/compound/5311221)
- **molar mass:** 432.5928 g/mol (C26H40O5) — DrugBank
- **groups:** approved, investigational

## About

Latanoprost is a prostaglandin analogue eye drop used to treat glaucoma, especially open-angle glaucoma, and ocular hypertension. It is widely used, is included on the WHO list of essential medicines, and is authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q634959](https://www.wikidata.org/wiki/Q634959) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:57 | 7:08 | 0/0/0 | 1/2/0 | 0/0/9 | 238,719/6,136 | einfracz / qwen3.8-27b | 8 | 0/6 | 8/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">in vitro</span> | [Moschos_2016_PAF](drugs/drug_latanoprost/pd_Moschos_2016_PAF.md) | PAF-induced aggregation ← latanoprost · direct sigmoid Emax (Hill) effect | — | Moschos MM et al., Impact of prostaglandin glaucoma drops…, Drug design, development an… (2016) | [10.2147/DDDT.S117806](https://doi.org/10.2147/DDDT.S117806) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Astin_1998_ciliary_artery_tension](drugs/drug_latanoprost/pd_Astin_1998_ciliary_artery_tension.md) | ciliary artery tension ← latanoprost acid · stimulation effect | — | Astin M, Effects of prostaglandin E2, F2alpha, a…, Journal of ocular pharmacol… (1998) | [10.1089/jop.1998.14.119](https://doi.org/10.1089/jop.1998.14.119) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Astin_1998_episcleral_vein_tension](drugs/drug_latanoprost/pd_Astin_1998_episcleral_vein_tension.md) | episcleral vein tension ← latanoprost acid · inhibition effect | — | Astin M, Effects of prostaglandin E2, F2alpha, a…, Journal of ocular pharmacol… (1998) | [10.1089/jop.1998.14.119](https://doi.org/10.1089/jop.1998.14.119) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [Durairaj_2014_IOP](drugs/drug_latanoprost/pd_Durairaj_2014_IOP.md) | intraocular pressure ← latanoprost · disease-progression model | — | Durairaj C et al., Mechanism - based translational pharmac…, Pharmaceutical research (2014) | [10.1007/s11095-014-1311-9](https://doi.org/10.1007/s11095-014-1311-9) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **CYP450** | `Q38` · E | metabolism | [Scuteri_2023](drugs/drug_latanoprost/pgx_Scuteri_2023_CYP450_Q38.md) | Scuteri D et al., Effect of genotype on individual respon…, Biology direct (2023) | [10.1186/s13062-023-00423-4](https://doi.org/10.1186/s13062-023-00423-4) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **MRP4** | `Q38` · E | transport | [Scuteri_2023](drugs/drug_latanoprost/pgx_Scuteri_2023_MRP4_Q38.md) | Scuteri D et al., Effect of genotype on individual respon…, Biology direct (2023) | [10.1186/s13062-023-00423-4](https://doi.org/10.1186/s13062-023-00423-4) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **PTGFR** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Scuteri_2023](drugs/drug_latanoprost/pgx_Scuteri_2023_PTGFR_Q100.md) | Scuteri D et al., Effect of genotype on individual respon…, Biology direct (2023) | [10.1186/s13062-023-00423-4](https://doi.org/10.1186/s13062-023-00423-4) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **ABCB1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [Zhou_2022](drugs/drug_latanoprost/pgx_Zhou_2022_ABCB1_Q100.md) | Zhou L et al., Clinical pharmacology and pharmacogenet…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.1015338](https://doi.org/10.3389/fphar.2022.1015338) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **GMDS** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | unknown | [Zhou_2022](drugs/drug_latanoprost/pgx_Zhou_2022_GMDS_Q100.md) | Zhou L et al., Clinical pharmacology and pharmacogenet…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.1015338](https://doi.org/10.3389/fphar.2022.1015338) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **MRP4** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [Zhou_2022](drugs/drug_latanoprost/pgx_Zhou_2022_MRP4_Q100.md) | Zhou L et al., Clinical pharmacology and pharmacogenet…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.1015338](https://doi.org/10.3389/fphar.2022.1015338) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **PTGFR** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Zhou_2022](drugs/drug_latanoprost/pgx_Zhou_2022_PTGFR_Q100.md) | Zhou L et al., Clinical pharmacology and pharmacogenet…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.1015338](https://doi.org/10.3389/fphar.2022.1015338) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **PTGS1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Zhou_2022](drugs/drug_latanoprost/pgx_Zhou_2022_PTGS1_Q100.md) | Zhou L et al., Clinical pharmacology and pharmacogenet…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.1015338](https://doi.org/10.3389/fphar.2022.1015338) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **SLCO2A1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [Zhou_2022](drugs/drug_latanoprost/pgx_Zhou_2022_SLCO2A1_Q100.md) | Zhou L et al., Clinical pharmacology and pharmacogenet…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.1015338](https://doi.org/10.3389/fphar.2022.1015338) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=latanoprost) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` transport | paper PGx gene |
| absorption | kidney | `ABCB1` transport | paper PGx gene |
| absorption | liver | `ABCB1` transport | paper PGx gene |
| absorption | placenta | `ABCB1` transport | paper PGx gene |
| absorption | small intestine | `ABCB1` transport | paper PGx gene |
| absorption | testis | `ABCB1` transport | paper PGx gene |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A6` inhibitor/substrate, `SLC22A8` inhibitor | DrugBank actor |
| excretion | skin | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CYP450 (metabolism), Corneal esterases (substrate), GMDS (unknown), MRP4 (transport), PTGFR (target), PTGS1 (target), SLCO2A1 (substrate), SLCO2A1 (transport).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 89 matched, 69 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_8 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Durairaj_2014.pdf` | Durairaj C et al., Mechanism - based translational pharmac…, Pharmaceutical research (2014) | pd | 5 | [10.1007/s11095-014-1311-9](https://doi.org/10.1007/s11095-014-1311-9) | [24549827](https://www.ncbi.nlm.nih.gov/pubmed/24549827) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Ansari_2004.pdf` | Ansari HR et al., Effects of prostaglandin F2alpha, latan…, Experimental eye research (2004) | pd | 4 | [10.1016/j.exer.2003.10.015](https://doi.org/10.1016/j.exer.2003.10.015) | [14729360](https://www.ncbi.nlm.nih.gov/pubmed/14729360) | metadata signals extractable PD data (EC50) |
| `Astin_1998.pdf` | Astin M, Effects of prostaglandin E2, F2alpha, a…, Journal of ocular pharmacol… (1998) | pd | 4 | [10.1089/jop.1998.14.119](https://doi.org/10.1089/jop.1998.14.119) | [9572537](https://www.ncbi.nlm.nih.gov/pubmed/9572537) | metadata signals extractable PD data (EC50) |
| `Sharif_2002.pdf` | Sharif NA et al., Agonist activity of bimatoprost, travop…, Journal of ocular pharmacol… (2002) | pd | 4 | [10.1089/10807680260218489](https://doi.org/10.1089/10807680260218489) | [12222762](https://www.ncbi.nlm.nih.gov/pubmed/12222762) | metadata signals extractable PD data (EC50) |
| `Sharif_2003.pdf` | Sharif NA et al., Ocular hypotensive FP prostaglandin (PG…, Journal of ocular pharmacol… (2003) | pd | 4 | [10.1089/108076803322660422](https://doi.org/10.1089/108076803322660422) | [14733708](https://www.ncbi.nlm.nih.gov/pubmed/14733708) | metadata signals extractable PD data (EC50) |
| `Sharif_2024.pdf` | Sharif NA, Human experience and efficacy of omiden…, Current opinion in pharmaco… (2024) | pd | 4 | [10.1016/j.coph.2023.102426](https://doi.org/10.1016/j.coph.2023.102426) | [38168596](https://www.ncbi.nlm.nih.gov/pubmed/38168596) | metadata signals extractable PD data (EC50) |
| `Yamane_2015.pdf` | Yamane S et al., IOP-Lowering Effect of ONO-9054, A Nove…, Investigative ophthalmology… (2015) | pd | 4 | [10.1167/iovs.14-16181](https://doi.org/10.1167/iovs.14-16181) | [25788650](https://www.ncbi.nlm.nih.gov/pubmed/25788650) | metadata signals extractable PD data (EC50) |
| `Çalışkan_2022.pdf` | Çalışkan B et al., Ophthalmic drugs: in vitro paraoxonase…, Biotechnology and applied b… (2022) | pd | 4 | [10.1002/bab.2284](https://doi.org/10.1002/bab.2284) | [34786760](https://www.ncbi.nlm.nih.gov/pubmed/34786760) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07T18:55:48.856415+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ansari_2003 | irrelevant | 0 | 0 | The study investigates the mechanism of action (phosphoinositide turnover and myosin phosphorylation) in cat iris sphincter, not pharmacokinetic parameters. |
| popPK | Ansari_2004 | irrelevant | 0 | 0 | The study reports in-vitro mechanistic pharmacology (signaling pathways and receptor expression) in bovine iris sphincter, not pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Astin_1997 | irrelevant | 0 | 0 | This is a mechanistic pharmacodynamic study of vascular relaxation in isolated tissue, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Astin_1998 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vascular effects (concentration-response curves), not a pharmacokinetic study reporting disposition parameters like clearance or volume for latanoprost. |
| popPK | Borghi_2010 | irrelevant | 2 | 0 | The study focuses on a new NO-releasing analog (NCX 125) rather than latanoprost PK, and only mentions similar "exposure" without reporting quantitative PK parameters (CL, V, ka). |
| popPK | Cavet_2015 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of trabecular meshwork cell contractility, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Cuppoletti_2007 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on cellular effects, not a pharmacokinetic study, and contains no disposition parameters. |
| popPK | Cuppoletti_2012 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study focused on BK channel activation and calcium signaling, containing no pharmacokinetic parameters for latanoprost (which is used only as a comparator). |
| popPK | Dodds_2013 | irrelevant | 0 | 0 | The paper focuses on clinical trial design simulation for psoriasis biologics and does not contain any pharmacokinetic data for latanoprost. |
| popPK | Durairaj_2014 | irrelevant | 3 | 0 | The study reports a PK-PD model for IOP lowering in animals using latanoprost (Xalatan) as a drug, but no quantitative PK parameter values (CL, V, ka, t1/2) for latanoprost are presented in the evidence. |
| popPK | Feng_2009 | irrelevant | 0 | 0 | The paper is a mechanistic and pharmacodynamic study on new 13-oxa prostaglandin analogs, using latanoprost only as a comparator for irritation and IOP effects, with no PK parameters reported. |
| popPK | Husain_2005 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cellular signaling pathways, reporting no pharmacokinetic disposition parameters for latanoprost. |
| popPK | Impagnatiello_2011 | irrelevant | 0 | 0 | The study is a pharmacodynamic evaluation of a novel compound (NCX 139) and uses latanoprost only as a comparator in in vitro binding and in vivo IOP assays, without reporting any pharmacokinetic disposition parameters for latanoprost. |
| popPK | Kolli_2021 | irrelevant | 0 | 0 | The study measures ocular perfusion pressure (a hemodynamic effect) rather than pharmacokinetic disposition parameters like clearance or volume. |
| popPK | Lu_2026 | irrelevant | 0 | 0 | The paper focuses on in-vitro ocular toxicity prediction and machine learning modeling of PGF2α analogs, not pharmacokinetic disposition parameters for latanoprost. |
| popPK | Martínez-Águila_2013 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effect (intraocular pressure reduction) of agomelatine, with latanoprost serving only as a comparator drug for efficacy, and no pharmacokinetic parameters are reported. |
| popPK | Nakajima_2003 | irrelevant | 1 | 0 | The study evaluates the pharmacodynamic potency (iris constriction, IOP reduction) of new compounds relative to latanoprost, rather than reporting quantitative pharmacokinetic disposition parameters for latanoprost. |
| popPK | Patil_2002 | irrelevant | 0 | 0 | The paper focuses on the mechanism of vascular relaxation by cholinomimetic drugs, with latanoprost only mentioned as a spasmogen comparator in isolated rat aorta, and no PK parameters for latanoprost are reported. |
| popPK | Romano_2007 | irrelevant | 0 | 0 | The study is an in vitro pharmacological investigation of bimatoprost's contractile effects on ciliary muscle, not a pharmacokinetic study reporting disposition parameters for latanoprost. |
| popPK | Sharif_2002 | irrelevant | 0 | 0 | The paper reports in vitro pharmacological potency (EC50) at a receptor, not quantitative pharmacokinetic disposition parameters. |
| popPK | Sharif_2003 | irrelevant | 0 | 0 | The paper reports receptor binding affinities and agonist potencies (pharmacodynamics) in cell cultures, not pharmacokinetic disposition parameters. |
| popPK | Sharif_2003_2 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study measuring receptor potency (EC50) and signaling, not pharmacokinetic disposition parameters (CL, V, half-life). |
| popPK | Sharif_2003_3 | irrelevant | 0 | 0 | The study reports in vitro pharmacodynamic potency (EC50) of latanoprost on human trabecular meshwork cells, not pharmacokinetic disposition parameters. |
| popPK | Sharif_2008 | irrelevant | 0 | 0 | The study is an in vitro pharmacological assessment of receptor potency (EC50) in cat iris tissue, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Sharif_2008_2 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological assay of FP-receptor agonist potency (EC50), not a pharmacokinetic study reporting disposition parameters. |
| popPK | Sharif_2011 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic/pharmacological investigation of receptor signaling in isolated human cells, not a pharmacokinetic study, and reports no PK parameters. |
| popPK | Sharif_2011_2 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study measuring receptor potency (EC50) in cell cultures, not a study of quantitative pharmacokinetic disposition parameters (CL, V, half-life). |
| popPK | Sharif_2024 | irrelevant | 0 | 0 | The study focuses on the efficacy of omidenepag isopropyl, with latanoprost serving only as a clinical comparator for IOP reduction, and no pharmacokinetic parameters for latanoprost are reported. |
| popPK | Yamamoto_2020 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study on adipocyte differentiation in 3T3-L1 cells, not a pharmacokinetic study, and latanoprost is used only as a comparator agent. |
| popPK | Yamane_2015 | irrelevant | 0 | 0 | The study evaluates the intraocular pressure (IOP) lowering effect of ONO-9054 in monkeys, using latanoprost only as a comparator drug without reporting any pharmacokinetic parameters for latanoprost. |
| popPK | Yousufzai_1996 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study on prostaglandin release and does not report pharmacokinetic disposition parameters for latanoprost. |
| popPK | Yousufzai_1998 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study on iris smooth muscle contraction, not a pharmacokinetic study reporting quantitative disposition parameters for latanoprost. |
| popPK | Yousufzai_2000 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro investigation of smooth muscle contraction using cat iris tissue, not a pharmacokinetic study reporting disposition parameters for latanoprost. |
| popPK | Zanutigh_2026 | irrelevant | 0 | 0 | The study is a clinical trial evaluating ocular surface symptoms and IOP control, containing no pharmacokinetic parameters for latanoprost. |
| PGx | Zhou_2022 | not_relevant | 5 | 3 | The paper is a review discussing associations between genetic variants (e.g., PTGFR) and treatment response (IOP reduction), but it does not report specific quantitative fitted effect sizes for these pharmacogenomic interactions. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
