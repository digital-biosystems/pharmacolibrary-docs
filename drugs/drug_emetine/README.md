<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01A&quot;,&quot;href&quot;:&quot;atc/P01A.md&quot;},{&quot;label&quot;:&quot;emetine&quot;}]"></div>

# emetine

- **generic name:** emetine
- **ATC codes:** `P01AX02`
- **DrugBank:** [DB13393](https://go.drugbank.com/drugs/DB13393) · **PubChem:** not captured
- **molar mass:** 480.649 g/mol (C29H40N2O4) — DrugBank
- **groups:** investigational

## About

Emetine is an isoquinoline alkaloid that has been used against protozoal infections such as amebiasis and fascioloidiasis. It is currently considered investigational and is not an approved medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3050386](https://www.wikidata.org/wiki/Q3050386) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 05:34 | 1:47 | 0/0/0 | 4/0/0 | 0/0/0 | 162,458/2,713 | ollama / glm-5.3-flash | 9 | 1/8 | 9/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Hudson_2016_TNF](drugs/drug_emetine/pd_Hudson_2016_TNF.md) | PEDF-induced TNF release from macrophages ← emetine · inhibition effect | — | Hudson LK et al., Emetine Di-HCl Attenuates Type 1 Diabet…, Molecular medicine (Cambrid… (2016) | [10.2119/molmed.2016.00082](https://doi.org/10.2119/molmed.2016.00082) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Mukhopadhyay_2016_HCMV_luciferase](drugs/drug_emetine/pd_Mukhopadhyay_2016_HCMV_luciferase.md) | HCMV replication (pp28-luciferase activity) ← emetine · direct sigmoid Emax (Hill) effect | — | Mukhopadhyay R et al., Efficacy and Mechanism of Action of Low…, PLoS pathogens (2016) | [10.1371/journal.ppat.1005717](https://doi.org/10.1371/journal.ppat.1005717) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Sato_2020_CTA](drugs/drug_emetine/pd_Sato_2020_CTA.md) | conditioned taste aversion (saccharin preference) ← emetine · direct sigmoid Emax (Hill) effect | — | Sato T et al., Involvement of the area postrema and th…, Journal of oral biosciences (2020) | [10.1016/j.job.2020.10.001](https://doi.org/10.1016/j.job.2020.10.001) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [Yang_2020_EC50_FIPV](drugs/drug_emetine/pd_Yang_2020_EC50_FIPV.md) | Viral activity inhibition (EC50, FIPV cytopathic effect) ← emetine · inhibition effect | — | Yang CW et al., Repurposing old drugs as antiviral agen…, Biomedical journal (2020) | [10.1016/j.bj.2020.05.003](https://doi.org/10.1016/j.bj.2020.05.003) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [Yang_2020_EC50_HCoV_OC43](drugs/drug_emetine/pd_Yang_2020_EC50_HCoV_OC43.md) | Nucleocapsid protein expression inhibition (EC50, HCoV-OC43 IFA) ← emetine · inhibition effect | — | Yang CW et al., Repurposing old drugs as antiviral agen…, Biomedical journal (2020) | [10.1016/j.bj.2020.05.003](https://doi.org/10.1016/j.bj.2020.05.003) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 26 matched, 20 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bleasel_2020 | irrelevant | 2 | 1 | A narrative review/rationale paper on emetine as antiviral; it cites only plasma/tissue concentrations from prior studies, with no clearance, volume, half-life, or population-PK model parameters for emetine reported. |
| popPK | Bleasel_2020_2 | irrelevant | 1 | 0 | This is a narrative review of emetine's antiviral/anti-inflammatory use and toxicity with no PK parameters (no CL, V, ka, or compartmental model values); the "long biological half-life" is mentioned without numbers. |
| popPK | Chen_1982 | irrelevant | 0 | 0 | Emetine is only used as a selective agent in a mutagenicity assay; no pharmacokinetic parameters are reported. |
| popPK | Gupta_1980 | irrelevant | 0 | 0 | In vitro CHO cell mutagenesis study; emetine is only a selection agent, no PK parameters. |
| popPK | Hu_2023 | irrelevant | 0 | 0 | This is an in vitro antiviral screening study; emetine is only mentioned as a screening hit with no PK parameters. |
| popPK | Hudson_2016 | irrelevant | 0 | 0 | This is a pharmacology/efficacy study of emetine in murine diabetes with no PK parameters (no CL, V, ka, half-life, or compartmental model) reported. |
| popPK | Leatherman_1993 | irrelevant | 0 | 0 | In-vitro cell-culture mechanistic study of emetine's effect on toxin-cell association; no PK disposition parameters reported. |
| popPK | Lund_1996 | irrelevant | 0 | 0 | In-vitro cell biology study using emetine only as a protein synthesis inhibitor; no pharmacokinetic parameters reported. |
| popPK | Mukhopadhyay_2016 | relevant | 4 | 2 | PK study of emetine in BALB/c mice (0.1 mg/kg oral) with half-life 35 h reported, but detailed disposition parameters (CL, V, tissue exposures) are in S2 Table/Fig 3A not provided. |
| popPK | Paranka_1994 | irrelevant | 0 | 0 | Emetine is only used as a cardiotoxin comparator in an in vitro rat myocyte study; no PK parameters reported. |
| popPK | Pesando_1995 | irrelevant | 0 | 0 | Emetine is only used as a comparator protein-synthesis inhibitor in an in vitro sea urchin embryo cell-cycle study; no PK parameters are reported. |
| popPK | Platzer_1985 | irrelevant | 0 | 0 | Emetine is only used as a protein synthesis inhibitor in in-vitro cell cultures; no PK parameters are reported. |
| popPK | Ren_2022 | irrelevant | 0 | 0 | This is an antiviral drug-design/SPR study of emetine's SARS-CoV-2 target binding, with no pharmacokinetic parameters reported. |
| popPK | Rosenkranz_2008 | irrelevant | 0 | 0 | In-vitro cytotoxicity/apoptosis study of alkaloids including emetine in trypanosomes and Jurkat cells; no PK disposition parameters reported. |
| popPK | Sato_2020 | irrelevant | 0 | 0 | Pharmacodynamic/emetogenic study in rats with no PK disposition parameters for emetine. |
| popPK | Stanton_1985 | irrelevant | 0 | 0 | Emetine is only used as a protein synthesis inhibitor in hippocampal slice experiments; no PK parameters reported. |
| popPK | Sweet_2006 | irrelevant | 0 | 0 | Emetine is only used as a protein synthesis inhibitor tool compound in rat islet respiration experiments; no PK parameters reported. |
| popPK | Tang_2020 | irrelevant | 0 | 0 | Antiviral efficacy study in mice with no PK disposition parameters (CL, V, half-life) reported for emetine. |
| popPK | Valipour_2022 | irrelevant | 1 | 0 | This is a review of emetine's antiviral activity; it mentions in vivo PK only qualitatively (lung concentrations, 12 h retention) with no quantitative disposition parameters (CL, V, half-life with volume, or PK model) reported. |
| popPK | Yang_2020 | irrelevant | 0 | 0 | In-vitro antiviral drug screening reporting only EC50/CC50 values for emetine, with no pharmacokinetic disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
