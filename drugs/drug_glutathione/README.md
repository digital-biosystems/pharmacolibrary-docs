<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;glutathione&quot;}]"></div>

# glutathione

- **generic name:** glutathione
- **ATC codes:** `V03AB32`
- **DrugBank:** [DB00143](https://go.drugbank.com/drugs/DB00143) · **PubChem:** [CID 124886](https://pubchem.ncbi.nlm.nih.gov/compound/124886)
- **molar mass:** 307.323 g/mol (C10H17N3O6S) — DrugBank
- **groups:** approved, investigational, nutraceutical

## About

Glutathione, a naturally occurring antioxidant tripeptide, is used as an antidote and has been investigated for other uses. It is approved and also sold as a nutraceutical, though it is not an authorised European Union medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q116907](https://www.wikidata.org/wiki/Q116907) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:43 | 1:29 | 0/0/0 | 0/0/0 | 0/0/0 | 113,347/2,045 | ollama / glm-5.3-flash | 6 | 0/6 | 6/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=glutathione) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood-brain barrier | `ABCC1` inhibitor/substrate | DrugBank actor |
| distribution | lung | `ABCC1` inhibitor/substrate | DrugBank actor |
| metabolism | blood | `GSTT1` unknown | DrugBank actor |
| metabolism | liver | `CYP3A4` unknown, `GSTM1` unknown, `GSTP1` unknown, `GSTT1` unknown | DrugBank actor |
| metabolism | lung | `GSTP1` unknown | DrugBank actor |
| metabolism | small intestine | `CYP3A4` unknown | DrugBank actor |
| excretion | kidney | `ABCC2` inhibitor/substrate, `ABCC4` substrate | DrugBank actor |
| excretion | liver | `ABCC2` inhibitor/substrate, `ABCC3` substrate, `ABCC4` substrate | DrugBank actor |
| excretion | small intestine | `ABCC2` inhibitor/substrate, `ABCC3` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ABCC5 (substrate), AKR1B1 (unknown), ESD (unknown), GGT1 (unknown), GLO1 (unknown), GLRX (unknown), GLRX2 (unknown), GPX1 (cofactor), GPX1 (unknown), GPX2 (cofactor), GPX3 (cofactor), GPX4 (cofactor), GPX5 (cofactor), GPX5 (unknown), GPX6 (cofactor), GPX7 (cofactor), GSR (unknown), GSS (unknown), GSTA1 (substrate), GSTA1 (unknown), GSTA2 (substrate), GSTA2 (unknown), GSTA3 (unknown), GSTA4 (unknown), GSTA5 (unknown), GSTK1 (unknown), GSTM2 (unknown), GSTM3 (unknown), GSTM4 (unknown), GSTM5 (unknown), GSTO1 (unknown), GSTO2 (unknown), GSTZ1 (unknown), HAGH (unknown), HPGDS (unknown), IMPDH1 (inhibitor), LTC4S (unknown), MGST1 (unknown), MGST2 (unknown), MGST3 (unknown), MMP9 (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 674 matched, 20 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Arbez_2019 | irrelevant | 0 | 0 | In vitro cell-culture study of cysteamine neuroprotection; glutathione is only mentioned as a metabolic pathway tested, with no PK parameters. |
| popPK | Boros_2024 | irrelevant | 0 | 0 | This is an aquatic ecotoxicity study of triazole fungicides; glutathione appears only via glutathione S-transferase/peroxidase docking, with no PK parameters for glutathione. |
| popPK | Choi_2015 | irrelevant | 0 | 0 | The drug studied is busulfan; glutathione only appears via GSTA1 polymorphisms as a covariate, with no glutathione PK parameters. |
| popPK | Dadkhah_2022 | irrelevant | 0 | 0 | This is a population PK study of busulfan and its metabolite sulfolane; glutathione appears only as part of the GSTA1 enzyme name (covariate), not as the subject drug, and no glutathione PK parameters are reported. |
| popPK | Fayed_2023 | irrelevant | 2 | 1 | The population PK model is for N-acetylcysteine, not glutathione; GSH is only a measured biomarker with no PK parameters reported, and no numeric GSH values appear in the evidence. |
| popPK | Im_2022 | irrelevant | 0 | 0 | Glutathione appears only as GST gene expression in a Daphnia ecotoxicology study; no PK parameters for glutathione. |
| popPK | Isbister_2001 | irrelevant | 0 | 0 | The PK parameters are for paracetamol, not glutathione, which is only mentioned as a protective mechanism. |
| popPK | Jang_2013 | irrelevant | 0 | 0 | This is a statistical modeling paper of cardiac function variables (heart rate, coronary flow, LVDP) in perfused mouse hearts, not a pharmacokinetic study of glutathione; no PK parameters are reported. |
| popPK | Luo_2018 | irrelevant | 0 | 0 | Glutathione appears only as a metabolic conjugation pathway for TCE/PCE in mice; glutathione itself is not the dosed drug and no glutathione disposition parameters are reported. |
| popPK | López-Mirabal_2008 | irrelevant | 0 | 0 | A review of yeast cytosolic redox biology with no pharmacokinetic parameters or numeric disposition values for glutathione. |
| popPK | Mak_2004 | irrelevant | 0 | 0 | Glutathione is only an endogenous marker of oxidative injury in an in-vitro antioxidant study of 4-hydroxy-propranolol; no PK parameters for glutathione are reported. |
| popPK | Mishra_2026 | irrelevant | 0 | 0 | This is a PBPK/PD model of clozapine; glutathione appears only as a safety/GST polymorphism factor, with no PK parameters for glutathione. |
| popPK | Morais_2019 | irrelevant | 0 | 0 | This is a vascular pharmacology study of diosgenin in rats; glutathione is only a measured antioxidant biomarker, not a dosed drug with PK parameters. |
| popPK | Nath_2016 | irrelevant | 0 | 0 | This is a mechanistic review of lonidamine's anticancer mechanism; glutathione is only mentioned as being inhibited in generation, with no PK parameters for glutathione. |
| popPK | Piraino_2025 | irrelevant | 0 | 0 | Glutathione is only used as a biomarker assay in a radioprotection drug-screening study; no PK parameters for glutathione are reported. |
| popPK | Schulz_2016 | irrelevant | 0 | 0 | Plant detoxification study of benzoxazolinone; glutathione only mentioned via GSTs, no PK parameters. |
| popPK | Xi_2024 | irrelevant | 0 | 0 | The PK parameters (CL, Vd, T1/2, bioavailability) are for N,N-dimethylaniline-heliamine (DH), a different drug; glutathione appears only as an in-silico reactivity prediction target, not as the subject drug. |
| popPK | Yang_2026 | irrelevant | 0 | 0 | This is an in-vitro ferroptosis/vitamin E study; glutathione is only mentioned as part of the GPX4 axis and BSO mechanism, with no PK parameters for glutathione. |
| popPK | Ye_2025 | irrelevant | 0 | 0 | This is a transcriptomic (microarray) study of probiotic B240 modulating the glutathione–ROS pathway in mice; no pharmacokinetic parameters (CL, V, ka, half-life, PK model) for glutathione are reported anywhere. |
| popPK | Zhang_2022 | irrelevant | 0 | 0 | Glutathione is only a measured hepatic biomarker, not the subject drug; PK parameters are for chlorogenic acid, hyperoside, and astragalin. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
