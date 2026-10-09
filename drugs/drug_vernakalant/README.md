<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;vernakalant&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Vernakalant_Mao2012_estimate&quot;,&quot;label&quot;:&quot;Mao_2012_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vernakalant/Vernakalant_Mao2012_estimate.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# vernakalant

- **generic name:** vernakalant
- **ATC codes:** `C01BG11`
- **DrugBank:** [DB06217](https://go.drugbank.com/drugs/DB06217) · **PubChem:** [CID 9930049](https://pubchem.ncbi.nlm.nih.gov/compound/9930049)
- **molar mass:** 349.471 g/mol (C20H31NO4) — DrugBank
- **groups:** approved

## About

Vernakalant is an antiarrhythmic drug used to treat atrial fibrillation. It is an approved medicine, available in some countries, mainly for hospital use in restoring normal heart rhythm.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q665725](https://www.wikidata.org/wiki/Q665725) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| vernakalant | parent | 349.471 | C20H31NO4 | DrugBank | [9930049](https://pubchem.ncbi.nlm.nih.gov/compound/9930049) | Mao_2012 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-09 00:36 | 16:03 | 1/1/1 | 0/0/1 | 0/0/2 | 144,649/54,731 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 2/0 | 0/2 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.308). The first reading is what the record holds.">cross-check: partial</span> | [Mao_2012_estimate](drugs/drug_vernakalant/Vernakalant_Mao2012_estimate.md) | ▶ model + simulator | 2-compartment, IV | 7 | Mao ZL et al., Population pharmacokinetics of vernakal…, Journal of clinical pharmac… (2012) | [10.1177/0091270011408425](https://doi.org/10.1177/0091270011408425) |
| <span class="pk-badge pk-badge--neutral">None</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.286). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: not captured</sub> | [Mao_2012_reference](drugs/drug_vernakalant/Vernakalant_Mao2012_reference.md) | — | — (no model) | 0 | Mao ZL et al., Population pharmacokinetics of vernakal…, Journal of clinical pharmac… (2012) | [10.1177/0091270011408425](https://doi.org/10.1177/0091270011408425) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.571). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub><br><sub>route_to: `human_review`</sub> | [Mao_2012_parameter_estimate_se](drugs/drug_vernakalant/Vernakalant_Mao2012_parameter_estimate_se.md) | — | 1-compartment (no model) | 1 | Mao ZL et al., Population pharmacokinetics of vernakal…, Journal of clinical pharmac… (2012) | [10.1177/0091270011408425](https://doi.org/10.1177/0091270011408425) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by ollama:gpt-oss:120b (not confirmed, agreement 0.833). The first reading is what the record holds.">cross-check: disputed</span> | [Mao_2011_QTcF](drugs/drug_vernakalant/pd_Mao_2011_QTcF.md) | QT interval prolongation corrected for heart rate by Fridericia's formula ← vernakalant · direct sigmoid Emax (Hill) effect | model (no simulator) | Mao Z et al., Population pharmacokinetic-pharmacodyna…, Journal of pharmacokinetics… (2011) | [10.1007/s10928-011-9207-3](https://doi.org/10.1007/s10928-011-9207-3) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by ollama:gpt-oss:120b (not confirmed, agreement 0.833). The first reading is what the record holds.">cross-check: disputed</span> | [Mao_2011_SBP](drugs/drug_vernakalant/pd_Mao_2011_SBP.md) | systolic blood pressure ← vernakalant · direct sigmoid Emax (Hill) effect | model (no simulator) | Mao Z et al., Population pharmacokinetic-pharmacodyna…, Journal of pharmacokinetics… (2011) | [10.1007/s10928-011-9207-3](https://doi.org/10.1007/s10928-011-9207-3) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **CYP2D6** | `Q22` · CL | metabolism | [Mao_2009](drugs/drug_vernakalant/pgx_Mao_2009_CYP2D6_Q22.md) | Mao ZL et al., Pharmacokinetics of novel atrial-select…, Journal of clinical pharmac… (2009) | [10.1177/0091270008325148](https://doi.org/10.1177/0091270008325148) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **CYP2D6** | `Q22` · CL | metabolism | [Mao_2012](drugs/drug_vernakalant/pgx_Mao_2012_CYP2D6_Q22.md) | Mao ZL et al., Population pharmacokinetics of vernakal…, Journal of clinical pharmac… (2012) | [10.1177/0091270011408425](https://doi.org/10.1177/0091270011408425) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=vernakalant) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` inhibitor/metabolism/substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` inhibitor/metabolism/substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: KCNA5 (blocker), KCND3 (blocker), KCNH2 (blocker), SCN5A (blocker).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 23 matched, 23 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 3  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** True

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Simó-Vicens_2017.pdf` | Simó-Vicens R et al., Effect of antiarrhythmic drugs on small…, European journal of pharmac… (2017) | pd | 5 | [10.1016/j.ejphar.2017.03.039](https://doi.org/10.1016/j.ejphar.2017.03.039) | [28322838](https://www.ncbi.nlm.nih.gov/pubmed/28322838) | metadata signals extractable PD data (IC50) |
| `Eldstrom_2009.pdf` | Eldstrom J et al., Modeling of high-affinity binding of th…, Journal of molecular graphi… (2009) | pd | 4 | [10.1016/j.jmgm.2009.07.005](https://doi.org/10.1016/j.jmgm.2009.07.005) | [19713139](https://www.ncbi.nlm.nih.gov/pubmed/19713139) | metadata signals extractable PD data (IC50) |
| `Seyler_2014.pdf` | Seyler C et al., Vernakalant activates human cardiac K(2…, Biochemical and biophysical… (2014) | pd | 4 | [10.1016/j.bbrc.2014.07.133](https://doi.org/10.1016/j.bbrc.2014.07.133) | [25108155](https://www.ncbi.nlm.nih.gov/pubmed/25108155) | metadata signals extractable PD data (EC50) |
| `Sutanto_2019.pdf` | Sutanto H et al., Maastricht antiarrhythmic drug evaluato…, Pharmacological research (2019) | pd | 4 | [10.1016/j.phrs.2019.104444](https://doi.org/10.1016/j.phrs.2019.104444) | [31493513](https://www.ncbi.nlm.nih.gov/pubmed/31493513) | metadata signals extractable PD data (IC50) |
| `Wettwer_2013.pdf` | Wettwer E et al., The new antiarrhythmic drug vernakalant…, Cardiovascular research (2013) | pd | 4 | [10.1093/cvr/cvt006](https://doi.org/10.1093/cvr/cvt006) | [23341576](https://www.ncbi.nlm.nih.gov/pubmed/23341576) | metadata signals extractable PD data (IC50) |
| `Mao_2011.pdf` | Mao ZL et al., Disposition and mass balance of [14C]ve…, Drug metabolism letters (2011) | pgx | 8 | [10.2174/187231211795305249](https://doi.org/10.2174/187231211795305249) | [21457140](https://www.ncbi.nlm.nih.gov/pubmed/21457140) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |

<sub>queue written 2026-10-09T00:31:54.842658+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cheng_2010 | irrelevant | 0 | 0 | The paper is a review of antiarrhythmic and anticoagulant agents that discusses vernakalant qualitatively but does not report any quantitative pharmacokinetic parameters. |
| PD | Cheng_2010 | not_relevant | 1 | 0 | The text is a review summary that qualitatively describes vernakalant's mechanism and efficacy but does not provide any numeric PD parameters, concentration-effect curves, or dose-response data. |
| popPK | Eldstrom_2007 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of channel binding and does not report pharmacokinetic parameters. |
| popPK | Eldstrom_2009 | irrelevant | 0 | 0 | The paper focuses on in-vitro binding to Kv1.5 channels and does not report pharmacokinetic disposition parameters for vernakalant. |
| popPK | Mao_2011 | irrelevant | 2 | 0 | The paper reports population PK/PD parameters (EC50, Emax) for pharmacodynamic endpoints (QTcF, SBP) rather than quantitative disposition parameters (CL, V, ka) for vernakalant. |
| PGx | Mao_2011_2 | not_relevant | 0 | 0 | The paper describes the disposition and mass balance of vernakalant in healthy volunteers but does not report any pharmacogenomic effects or gene variant analyses. |
| popPK | Seoane_2015 | irrelevant | 2 | 0 | The paper is a review article analyzing vernakalant's PK/PD, but the provided evidence contains no original quantitative disposition parameters or numeric values. |
| PD | Seoane_2015 | not_relevant | 2 | 1 | The text is a review summary that mentions the aim to analyze PK/PD but does not provide specific numeric PD parameters or exposure-response data in the provided excerpt. |
| popPK | Seyler_2014 | irrelevant | 0 | 0 | no_text gate: only 70 chars of text extracted (&lt; 400) |
| PD | Seyler_2014 | not_relevant | 0 | 0 | The paper describes the molecular mechanism of action (activation of K2P17.1 channels) but does not report pharmacokinetic data, exposure-response relationships, or numeric PD parameters (e.g., EC50, Emax) for vernakalant in a physiological or clinical context. |
| popPK | Simó-Vicens_2017 | irrelevant | 0 | 0 | The paper title indicates a mechanistic study on ion channels, not a pharmacokinetic study reporting quantitative disposition parameters for vernakalant. |
| PD | Simó-Vicens_2017 | not_relevant | 0 | 0 | The paper focuses on the electrophysiological effects of antiarrhythmic drugs on ion channels and does not report pharmacokinetic or pharmacodynamic exposure-response relationships for vernakalant. |
| popPK | Sutanto_2019 | irrelevant | 0 | 0 | The paper describes a computational tool for antiarrhythmic drugs and does not report original quantitative pharmacokinetic parameters for vernakalant. |
| PD | Sutanto_2019 | not_relevant | 0 | 0 | The paper describes a computational tool (MANTA) for evaluating antiarrhythmic drugs but does not report specific pharmacodynamic or exposure-response data for vernakalant. |
| popPK | Tikhonov_2014 | irrelevant | 0 | 0 | The paper describes in silico homology modeling of ligand binding to a potassium channel, not a pharmacokinetic study. |
| PD | Tikhonov_2014 | not_relevant | 0 | 0 | The paper focuses on homology modeling and molecular docking of vernakalant in the Kv1.5 channel, providing no pharmacokinetic or pharmacodynamic data, exposure-response analysis, or numeric PD parameters. |
| popPK | Wettwer_2013 | irrelevant | 0 | 0 | The paper is an ex vivo electrophysiology study of human atrial tissue, not a pharmacokinetic study reporting disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-09 00:20 UTC</sub>
