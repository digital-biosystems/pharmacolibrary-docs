<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G04C&quot;,&quot;href&quot;:&quot;atc/G04C.md&quot;},{&quot;label&quot;:&quot;silodosin&quot;}]"></div>

# silodosin

- **generic name:** silodosin
- **ATC codes:** `G04CA04`
- **DrugBank:** [DB06207](https://go.drugbank.com/drugs/DB06207) · **PubChem:** [CID 5312125](https://pubchem.ncbi.nlm.nih.gov/compound/5312125)
- **molar mass:** 495.5345 g/mol (C25H32F3N3O4) — DrugBank
- **groups:** approved, investigational

## About

Silodosin is an alpha-blocker used to treat urinary symptoms caused by benign prostatic hyperplasia. It is an approved medicine, authorised in the European Union for prostatic hyperplasia, and is also being investigated for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q411770](https://www.wikidata.org/wiki/Q411770) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:16 | 5:46 | 0/0/0 | 1/2/0 | 0/0/4 | 127,384/3,095 | einfracz / qwen3.8-27b | 17 | 1/4 | 17/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Barbosa_2025_AChE](drugs/drug_silodosin/pd_Barbosa_2025_AChE.md) | Acetylcholinesterase inhibitory activity ← Silodosin · inhibition effect | — | Barbosa DB et al., Silodosin as a Novel Inhibitor of Acety…, ACS omega (2025) | [10.1021/acsomega.5c07084](https://doi.org/10.1021/acsomega.5c07084) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Barbosa_2025_BACE_1](drugs/drug_silodosin/pd_Barbosa_2025_BACE_1.md) | BACE-1 inhibitory activity ← Silodosin · inhibition effect | — | Barbosa DB et al., Silodosin as a Novel Inhibitor of Acety…, ACS omega (2025) | [10.1021/acsomega.5c07084](https://doi.org/10.1021/acsomega.5c07084) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Barbosa_2025_BuChE](drugs/drug_silodosin/pd_Barbosa_2025_BuChE.md) | Butyrylcholinesterase inhibitory activity ← Silodosin · inhibition effect | — | Barbosa DB et al., Silodosin as a Novel Inhibitor of Acety…, ACS omega (2025) | [10.1021/acsomega.5c07084](https://doi.org/10.1021/acsomega.5c07084) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Yamada_2007_occupancy](drugs/drug_silodosin/pd_Yamada_2007_occupancy.md) | alpha(1)-adrenoceptor occupancy ← silodosin · target-mediated drug disposition | — | Yamada S et al., Prediction of alpha1-adrenoceptor occup…, Biological & pharmaceutical… (2007) | [10.1248/bpb.30.1237](https://doi.org/10.1248/bpb.30.1237) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Yuksel_2015_stone_expulsion](drugs/drug_silodosin/pd_Yuksel_2015_stone_expulsion.md) | stone expulsion ← silodosin · stimulation effect | — | Yuksel M et al., Efficacy of silodosin in the treatment…, International journal of cl… (2015) | — |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **ABCB1** | `Q315` · sigma | transport | [Abdullaev_2025](drugs/drug_silodosin/pgx_Abdullaev_2025_ABCB1_Q315.md) | Abdullaev SP et al., Genetic Modulation of Silodosin Exposur…, Journal of personalized med… (2025) | [10.3390/jpm15080386](https://doi.org/10.3390/jpm15080386) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **CYP3A4** | `Q36` · Cmin | metabolism | [Abdullaev_2025](drugs/drug_silodosin/pgx_Abdullaev_2025_CYP3A4_Q36.md) | Abdullaev SP et al., Genetic Modulation of Silodosin Exposur…, Journal of personalized med… (2025) | [10.3390/jpm15080386](https://doi.org/10.3390/jpm15080386) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **CYP3A5** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Abdullaev_2025](drugs/drug_silodosin/pgx_Abdullaev_2025_CYP3A5_Q100.md) | Abdullaev SP et al., Genetic Modulation of Silodosin Exposur…, Journal of personalized med… (2025) | [10.3390/jpm15080386](https://doi.org/10.3390/jpm15080386) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **UGT2B7** | `Q66` · Vmax | metabolism | [Abdullaev_2025](drugs/drug_silodosin/pgx_Abdullaev_2025_UGT2B7_Q66.md) | Abdullaev SP et al., Genetic Modulation of Silodosin Exposur…, Journal of personalized med… (2025) | [10.3390/jpm15080386](https://doi.org/10.3390/jpm15080386) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=silodosin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate/transport | DrugBank actor |
| absorption | kidney | `ABCB1` substrate/transport | DrugBank actor |
| absorption | liver | `ABCB1` substrate/transport | DrugBank actor |
| absorption | placenta | `ABCB1` substrate/transport | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate/transport | DrugBank actor |
| absorption | testis | `ABCB1` substrate/transport | DrugBank actor |
| metabolism | kidney | `CYP3A5` metabolism, `UGT2B7` metabolism/substrate | DrugBank actor |
| metabolism | liver | `ALDH2` substrate, `CYP3A4` metabolism/substrate, `CYP3A5` metabolism, `UGT2B7` metabolism/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` metabolism/substrate, `CYP3A5` metabolism, `UGT2B7` metabolism/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ABCB4 (substrate), ADRA1A (target), ADRA1B (target), ADRA1D (target), AKR1A1 (substrate), KCNH2 (blocker).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 49 matched, 49 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Bensalah_2017 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (DDI) with a CYP3A4 inhibitor, not a pharmacogenomic effect (gene variant/genotype) on PK/PD parameters. |
| PGx | Cantrell_2010 | not_relevant | 0 | 0 | The paper is a clinical review of silodosin's efficacy and safety and does not report any pharmacogenomic data or gene-drug interactions. |
| popPK | Chang_2018 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of bladder motor function using silodosin as a pharmacological tool to block alpha-1A receptors, not a pharmacokinetic study. |
| popPK | Fong_2025 | irrelevant | 0 | 0 | The paper is an in silico study on montelukast binding to Cav3.1 channels and does not involve silodosin or report any pharmacokinetic parameters. |
| PGx | Matsubara_2006 | not_relevant | 0 | 0 | The paper reports general pharmacokinetics in animals and healthy humans but does not report any gene variant or genotype effects on PK parameters. |
| popPK | Modi_2018 | irrelevant | 0 | 0 | The paper is a health services study analyzing prescribing patterns and industry payments, not a pharmacokinetic study of silodosin. |
| popPK | Shore_2019 | irrelevant | 0 | 0 | The paper reports pharmacokinetics and drug-drug interactions for darolutamide, not silodosin. |
| popPK | Yanai-Inamura_2012 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of salivary secretion and urethral pressure in rats, not a pharmacokinetic study, and contains no PK parameters for silodosin. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
