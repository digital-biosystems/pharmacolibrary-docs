<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A08A&quot;,&quot;href&quot;:&quot;atc/A08A.md&quot;},{&quot;label&quot;:&quot;phentermine&quot;}]"></div>

# phentermine

- **generic name:** phentermine
- **ATC codes:** `A08AA01`, `A08AA51`
- **DrugBank:** [DB00191](https://go.drugbank.com/drugs/DB00191) · **PubChem:** [CID 4771](https://pubchem.ncbi.nlm.nih.gov/compound/4771)
- **molar mass:** 149.2328 g/mol (C10H15N) — DrugBank
- **groups:** approved, illicit, investigational

## About

Phentermine is an appetite suppressant used to treat obesity. It is an approved antiobesity medicine, though it also has illicit use and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q418157](https://www.wikidata.org/wiki/Q418157) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 21:04 | 3:19 | 0/0/0 | 0/0/0 | 0/0/1 | 120,532/2,422 | ollama / qwen3.8:27b-mtp-q8_0 | 10 | 1/8 | 10/0 | 0 |

## popPK records

_not available_

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **PLXNA4** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Paszkowiak_2023](drugs/drug_phentermine/pgx_Paszkowiak_2023_PLXNA4_Q100.md) | Paszkowiak M et al., Case report of PLXNA4 variant associate…, Obesity pillars (2023) | [10.1016/j.obpill.2023.100059](https://doi.org/10.1016/j.obpill.2023.100059) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=phentermine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `MAOA` target, `MAOB` target | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate, `MAOA` target | DrugBank actor |
| metabolism | platelet | `MAOB` target | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `MAOA` target | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| — | brain | `SLC6A4` inhibitor | DrugBank actor |
| — | platelet | `SLC6A4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: NPY (inhibitor), PLXNA4 (target), SLC6A2 (inhibitor), SLC6A3 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 45 matched, 44 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Shram_2022.pdf` | Shram MJ et al., Oral, intranasal, and intravenous abuse…, Current medical research an… (2022) | pd | 5 | [10.1080/03007995.2022.2076474](https://doi.org/10.1080/03007995.2022.2076474) | [35570699](https://www.ncbi.nlm.nih.gov/pubmed/35570699) | metadata signals extractable PD data (Emax) |
| `Alexander_2005.pdf` | Alexander M et al., Noradrenergic and dopaminergic effects…, Synapse (New York, N.Y.) (2005) | pd | 4 | [10.1002/syn.20126](https://doi.org/10.1002/syn.20126) | [15729739](https://www.ncbi.nlm.nih.gov/pubmed/15729739) | metadata signals extractable PD data (EC50) |
| `Johnson_2003.pdf` | Johnson GJ et al., The effect of the anorectic agent, d-fe…, Journal of thrombosis and h… (2003) | pd | 4 | [10.1046/j.1538-7836.2003.00474.x](https://doi.org/10.1046/j.1538-7836.2003.00474.x) | [14675103](https://www.ncbi.nlm.nih.gov/pubmed/14675103) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-04T21:02:39.629211+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alexander_2005 | irrelevant | 0 | 0 | no_text gate: only 100 chars of text extracted (&lt; 400) |
| PD | Alexander_2005 | not_relevant | 0 | 0 | The paper focuses on the pharmacology of amphetamine-like stimulants in baboons and does not report any pharmacokinetic or pharmacodynamic data for phentermine. |
| popPK | Blumenthal_2014 | irrelevant | 0 | 0 | The study is an electronic health records analysis of weight gain associated with antidepressants, where phentermine is used only as a comparator for assay sensitivity, and no pharmacokinetic parameters are reported. |
| popPK | Callisto_2020 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of topiramate, not the pharmacokinetics of phentermine. |
| PD | Callisto_2020 | not_relevant | 0 | 0 | The paper reports a pharmacodynamic relationship for topiramate, not phentermine. |
| popPK | Carlsson_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of liraglutide, not phentermine. |
| PD | Carlsson_2021 | not_relevant | 0 | 0 | The paper reports pharmacokinetic and exposure-response data for liraglutide, not phentermine. |
| popPK | Carter_2018 | irrelevant | 0 | 0 | The study evaluates the abuse liability (subjective effects) of solriamfetol using phentermine as a comparator, and does not report pharmacokinetic parameters for phentermine. |
| PD | Carter_2018 | not_relevant | 0 | 0 | The paper is a human abuse liability study comparing solriamfetol to phentermine using subjective VAS ratings; it does not report pharmacokinetic data, concentration-effect curves, or numeric PD parameters (e.g., Emax, EC50) for phentermine. |
| popPK | Cataldi_2019 | irrelevant | 0 | 0 | The paper is a review discussing gender-related pharmacology of anti-obesity drugs and does not report original quantitative pharmacokinetic parameters for phentermine. |
| PD | Cataldi_2019 | not_relevant | 1 | 0 | The text is a review discussing the theoretical need for gender-specific pharmacodynamic studies but does not report any specific numeric PD parameters or exposure-response data for phentermine. |
| popPK | Choi_2026 | irrelevant | 0 | 0 | The study is a comparative efficacy and safety analysis of anti-obesity medications (including phentermine-topiramate) for weight loss in psychiatric patients, and it does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life) for phentermine. |
| popPK | Dong_2017 | irrelevant | 0 | 0 | The study reports pharmacodynamic efficacy parameters (weight loss) for phentermine-topiramate, not pharmacokinetic disposition parameters. |
| popPK | Ferris_2012 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic investigation of dopamine transporter inhibition using cyclic voltammetry, not a pharmacokinetic study, and reports no disposition parameters for phentermine. |
| PGx | Guzman_2014 | not_relevant | 0 | 0 | The text is a general introduction to a review article summarizing pharmacogenetics of obesity drugs, but it does not report specific gene-variant effects on phentermine PK/PD parameters. |
| popPK | Han_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and exposure-response of sibutramine and its metabolites, not phentermine. |
| popPK | Hsia_2020 | relevant | 8 | 2 | The study reports PK parameters for phentermine, but the specific numeric values for CL/F, Vc/F, and half-life are not present in the provided text, only qualitative comparisons to adult data. |
| PD | Hsia_2020 | not_relevant | 2 | 1 | The study reports PK parameters and group-level mean changes in PD endpoints (weight, BP, HR) at a single time point, but does not provide a concentration-effect model, dose-response curve, or numeric PD parameters (Emax, EC50, etc.). |
| popPK | Johnson_2003 | irrelevant | 0 | 0 | The paper studies d-fenfluramine and its metabolite, not phentermine, and focuses on platelet serotonin uptake rather than pharmacokinetic parameters. |
| PD | Johnson_2003 | not_relevant | 0 | 0 | The paper studies d-fenfluramine and its metabolite, not phentermine, and focuses on platelet serotonin uptake/efflux rather than a systemic pharmacodynamic exposure-response relationship for the target drug. |
| popPK | Kilpatrick_2001 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study examining monoamine oxidase inhibition and serotonin release, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Kim_2025 | irrelevant | 0 | 0 | The study is a retrospective cohort analysis of clinical outcomes (weight loss, HbA1c, persistence) and does not report any pharmacokinetic parameters for phentermine. |
| PGx | Lang_2026 | not_relevant | 0 | 0 | The paper is a clinical case series on obesity treatment and does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Li_2010 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for taranabant, not phentermine. |
| PD | Li_2010 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for taranabant, not phentermine, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The paper focuses on the structure-based design of 5-HT2A receptor agonists (psychedelics) and does not report pharmacokinetic parameters for phentermine. |
| popPK | Lim_2016 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of topiramate, not phentermine. |
| PD | Lim_2016 | not_relevant | 0 | 0 | The paper reports a PD model for topiramate, not phentermine. |
| popPK | Mastrandrea_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of liraglutide, not phentermine. |
| PD | Mastrandrea_2019 | not_relevant | 0 | 0 | The paper investigates liraglutide, not phentermine, and reports only population PK and descriptive PD endpoints (BMI Z-score change) without numeric PD parameters. |
| popPK | Mika_2021 | irrelevant | 0 | 0 | The study investigates histamine H3 receptor ligands (KSK-59 and KSK-73) in rats, not phentermine. |
| PD | Mika_2021 | not_relevant | 0 | 0 | The paper studies histamine H3 receptor ligands (KSK-59 and KSK-73) and does not report any pharmacodynamic or exposure-response data for phentermine. |
| popPK | Mika_2022 | irrelevant | 0 | 0 | The study evaluates the anti-obesity effects of KSK-60 and KSK-74 in rats and does not involve phentermine or report any pharmacokinetic parameters for it. |
| PD | Mika_2022 | not_relevant | 0 | 0 | The paper studies KSK-60 and KSK-74; phentermine is only mentioned as a reference compound in the introduction, and no PD parameters or exposure-response data for phentermine are reported. |
| PGx | Nagi_2024 | not_relevant | 0 | 0 | The paper is a case report of a rare adverse event (ischemic colitis) and does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Nong_2026 | irrelevant | 0 | 0 | The paper is a network meta-analysis of obesity drug efficacy and safety outcomes, not a pharmacokinetic study, and contains no PK parameters for phentermine. |
| PD | Nong_2026 | not_relevant | 2 | 0 | The paper is a network meta-analysis comparing clinical outcomes (weight loss, adverse events) across drugs; it does not report pharmacokinetic data or derive numeric pharmacodynamic parameters (e.g., Emax, EC50) for phentermine. |
| popPK | Papasava_1985 | irrelevant | 0 | 0 | The study is a behavioral self-administration experiment in rats and does not report any pharmacokinetic parameters for phentermine. |
| popPK | Pearl_2023 | irrelevant | 0 | 0 | The paper is a narrative review of topiramate, not a pharmacokinetic study of phentermine, and contains no quantitative PK parameters for phentermine. |
| PD | Pearl_2023 | not_relevant | 0 | 0 | The paper is a narrative review of topiramate and does not report any specific pharmacodynamic or exposure-response data for phentermine. |
| popPK | Saletu_1979 | irrelevant | 1 | 0 | The paper focuses on pharmacodynamic properties (EEG, psychometrics) and mentions blood levels only in the context of correlating them with effects, without reporting quantitative PK parameters like clearance or volume. |
| PD | Saletu_1979 | not_relevant | 3 | 1 | The text is an abstract that qualitatively mentions relationships between blood levels and effects for phentermine but does not provide any numeric PD parameters, curves, or data points. |
| popPK | Schechter_1996 | irrelevant | 0 | 0 | The study is a behavioral drug discrimination experiment in rats, not a pharmacokinetic study, and reports no disposition parameters for phentermine. |
| popPK | Schoedel_2012 | irrelevant | 0 | 0 | The study assesses abuse potential and cognitive effects of taranabant, using phentermine only as an active comparator without reporting any pharmacokinetic parameters. |
| popPK | Setnik_2020 | irrelevant | 0 | 0 | The study evaluates the abuse potential of pitolisant using phentermine only as a positive control/comparator, and no pharmacokinetic parameters for phentermine are reported. |
| PD | Setnik_2020 | not_relevant | 0 | 0 | The paper evaluates the abuse potential of pitolisant using phentermine as an active comparator, but it does not report any pharmacokinetic data, concentration-effect relationships, or dose-response modeling for phentermine. |
| popPK | Sharma_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of naltrexone and bupropion (Contrave), not phentermine. |
| popPK | Shram_2022 | irrelevant | 0 | 0 | no_text gate: only 112 chars of text extracted (&lt; 400) |
| PD | Shram_2022 | not_relevant | 0 | 0 | The paper focuses on serdexmethylphenidate, not phentermine, and does not report PD parameters for the target drug. |
| PGx | Solas_2016 | not_relevant | 0 | 0 | The text is a general review introduction discussing approved obesity drugs and the concept of pharmacogenetics, but it does not report specific gene variants or quantitative PK/PD effects for phentermine. |
| popPK | Vulichi_2023 | irrelevant | 0 | 0 | The study focuses on the in vitro and in silico evaluation of Ziziphus oenoplia leaves as pancreatic lipase inhibitors and does not involve phentermine or its pharmacokinetics. |
| PD | Vulichi_2023 | not_relevant | 0 | 0 | The paper investigates the pancreatic lipase inhibitory potential of Ziziphus oenoplia leaves, not phentermine, and does not report any pharmacodynamic or exposure-response data for phentermine. |
| popPK | Wang_2025 | irrelevant | 0 | 0 | The study focuses on pharmacodynamic efficacy (weight loss) rather than pharmacokinetic disposition parameters for phentermine. |
| PD | Wang_2025 | not_relevant | 3 | 2 | The paper is a meta-analysis of clinical trial outcomes (weight loss over time) and does not report a pharmacodynamic model linking drug exposure/concentration to effect, nor does it provide numeric PD parameters like Emax or EC50 for phentermine. |
| popPK | Weintraub_1984 | irrelevant | 0 | 0 | The paper is a clinical trial focused on weight loss efficacy and adverse effects, reporting no pharmacokinetic parameters for phentermine. |
| PD | Weintraub_1984 | not_relevant | 1 | 0 | The paper reports clinical efficacy (weight loss) for fixed doses but does not provide plasma concentration data or fit a pharmacodynamic model to derive numeric PD parameters like Emax or EC50. |
| popPK | Yoon_2023 | irrelevant | 2 | 0 | The study focuses on drug-drug interaction ratios (GMR) for phentermine rather than reporting absolute quantitative disposition parameters (CL, V, t1/2) for phentermine as the primary subject. |
| PD | Yoon_2023 | not_relevant | 2 | 1 | The study reports PK interaction metrics (GMRs) and qualitative PD outcomes (weight loss, urinary glucose) but does not provide numeric PD parameters (e.g., Emax, EC50) or a concentration-effect model for phentermine. |
| popPK | Zabik_1981 | irrelevant | 0 | 0 | The study focuses on behavioral pharmacology (appetite depression and central stimulation) in rats and does not report quantitative pharmacokinetic parameters such as clearance, volume, or half-life for phentermine. |
| PD | Zabik_1981 | not_relevant | 3 | 0 | The paper describes qualitative dose-response and time-response trends (delayed onset, reduced activity) for phentermine but does not provide numeric PD parameters or extractable concentration-effect data in the provided text. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
