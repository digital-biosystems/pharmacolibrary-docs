<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09A&quot;,&quot;href&quot;:&quot;atc/C09A.md&quot;},{&quot;label&quot;:&quot;lisinopril&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lisinopril_Sandra2024_reference&quot;,&quot;label&quot;:&quot;Sandra_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lisinopril/Lisinopril_Sandra2024_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# lisinopril

- **generic name:** lisinopril
- **ATC codes:** `C09AA03`, `C09BA03`, `C09BB03`, `C10BX07`
- **DrugBank:** [DB00722](https://go.drugbank.com/drugs/DB00722) · **PubChem:** [CID 5362119](https://pubchem.ncbi.nlm.nih.gov/compound/5362119)
- **molar mass:** 405.4879 g/mol (C21H31N3O5) — DrugBank
- **groups:** approved, investigational

## About

Lisinopril is an ACE inhibitor used to treat high blood pressure, heart failure, and after a heart attack. It is an approved medicine, widely used in general practice, and also available in fixed combinations with diuretics or other cardiovascular drugs.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q412208](https://www.wikidata.org/wiki/Q412208) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| lisinopril | parent | 405.488 | C21H31N3O5 | DrugBank | [5362119](https://pubchem.ncbi.nlm.nih.gov/compound/5362119) | Medhora_2021, Sandra_2024, Thomson_1989 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 06:54 | 20:01 | 1/1/1 | 0/0/1 | 0/0/0 | 407,647/47,602 | ollama / qwen3.8:27b-mtp-q8_0 | 11 | 9/2 | 2/9 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Sandra_2024_reference](drugs/drug_lisinopril/Lisinopril_Sandra2024_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Sandra L et al., Population pharmacokinetics of lisinopr…, British journal of clinical… (2024) | [10.1111/bcp.15936](https://doi.org/10.1111/bcp.15936) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.125). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Thomson_1989_reference](drugs/drug_lisinopril/Lisinopril_Thomson1989_reference.md) | — | 1-compartment (no model) | 1 | Thomson AH et al., Lisinopril population pharmacokinetics…, British journal of clinical… (1989) | [10.1111/j.1365-2125.1989.tb05335.x](https://doi.org/10.1111/j.1365-2125.1989.tb05335.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.846). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">rat</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Medhora_2021_reference](drugs/drug_lisinopril/Lisinopril_Medhora2021_reference.md) | — | 2-compartment (no model) | 6 | Medhora M et al., Radiation Increases Bioavailability of…, Frontiers in pharmacology (2021) | [10.3389/fphar.2021.646076](https://doi.org/10.3389/fphar.2021.646076) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Bellissant_1996_BAF](drugs/drug_lisinopril/pd_Bellissant_1996_BAF.md) | brachial artery flow ← lisinopril · direct sigmoid Emax (Hill) effect | model (no simulator) | Bellissant E et al., Pharmacokinetic-pharmacodynamic model r…, Journal of cardiovascular p… (1996) | [10.1097/00005344-199609000-00018](https://doi.org/10.1097/00005344-199609000-00018) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Bellissant_1996_BVR](drugs/drug_lisinopril/pd_Bellissant_1996_BVR.md) | brachial vascular resistance ← lisinopril · direct sigmoid Emax (Hill) effect | model (no simulator) | Bellissant E et al., Pharmacokinetic-pharmacodynamic model r…, Journal of cardiovascular p… (1996) | [10.1097/00005344-199609000-00018](https://doi.org/10.1097/00005344-199609000-00018) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Bellissant_1996_PCEA](drugs/drug_lisinopril/pd_Bellissant_1996_PCEA.md) | plasma converting enzyme activity ← lisinopril · direct sigmoid Emax (Hill) effect | model (no simulator) | Bellissant E et al., Pharmacokinetic-pharmacodynamic model r…, Journal of cardiovascular p… (1996) | [10.1097/00005344-199609000-00018](https://doi.org/10.1097/00005344-199609000-00018) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=lisinopril) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `SLC15A1` inhibitor/substrate | DrugBank actor |
| excretion | kidney | `SLC15A2` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ACE (inhibitor), REN (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 20 matched, 17 returned
- **screened:** 12  ·  **relevant:** 3
- **records:** 3  ·  extracted 1  ·  needs_review 1  ·  rejected 1  ·  stale 3
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Sandra_2024.pdf` | Sandra L et al., Population pharmacokinetics of lisinopr…, British journal of clinical… (2024) | popPK | 10 | [10.1111/bcp.15936](https://doi.org/10.1111/bcp.15936) | [37864281](https://pubmed.ncbi.nlm.nih.gov/37864281) | The paper reports a population PK model for lisinopril in humans with explicit numeric values for clearance, volume of distribution, and absorption rate constant in the abstract. |
| `Ajayi_1985.pdf` | Ajayi AA et al., Pharmacodynamics and population pharmac…, International journal of cl… (1985) | popPK | 9 | not captured | [3005181](https://pubmed.ncbi.nlm.nih.gov/3005181) | The paper describes a population pharmacokinetic study of lisinopril in humans and reports that parameter estimates were obtained, but the specific numeric values are not present in the provided evidence. |

<sub>queue written 2026-10-07T06:36:08.593799+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ajayi_1985 | relevant | 9 | 0 | The paper describes a population pharmacokinetic study of lisinopril in humans and reports that parameter estimates were obtained, but the specific numeric values are not present in the provided evidence. |
| popPK | Bagaté_1999 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of kinin receptors in rat kidneys where lisinopril is used only as an ACE inhibitor to prevent kinin catabolism, not as the subject of pharmacokinetic analysis. |
| PD | Bagaté_1999 | not_relevant | 1 | 1 | Lisinopril appears only as a single fixed concentration (1 µM) modulating des-Arg9-BK vasoconstriction; no lisinopril concentration- or dose-response relationship or PD parameters for the drug are reported or derivable. |
| popPK | Bellissant_1996 | irrelevant | 2 | 0 | The study reports pharmacodynamic parameters (CE50, Emax, gamma) relating concentration to effect, but does not report quantitative pharmacokinetic disposition parameters (CL, V, ka, t1/2) for lisinopril. |
| popPK | Chadwick_2015 | irrelevant | 0 | 0 | The paper is a mechanistic study on mineralocorticoid receptor expression and gene expression in muscle, not a pharmacokinetic study of lisinopril. |
| PD | Chadwick_2015 | not_relevant | 1 | 1 | The EC50/IC50 values are in vitro receptor pharmacology (aldosterone/spironolactone on MR in myotubes), not a lisinopril exposure- or dose-response relationship; lisinopril appears only as a fixed-dose combination treatment in mice with no PD parameters. |
| popPK | Fedorova_2015 | irrelevant | 0 | 0 | The study focuses on the mechanism of action of spironolactone and marinobufagenin on vascular fibrosis, with lisinopril serving only as a background medication for hypertensive patients, and no pharmacokinetic parameters for lisinopril are reported. |
| PD | Fedorova_2015 | not_relevant | 0 | 0 | Lisinopril appears only as fixed background therapy in resistant hypertension patients; all PD relationships (MBG/canrenone effects on Na/K-ATPase, collagen, nitroprusside EC50) concern marinobufagenin/spironolactone, not lisinopril exposure or dose. |
| popPK | Jiménez-Ferrer_2010 | irrelevant | 0 | 0 | The study evaluates the antihypertensive and ACE-inhibitory effects of Salvia elegans extracts in mice and in vitro, using lisinopril only as a positive control for enzyme inhibition, with no pharmacokinetic parameters reported for lisinopril. |
| PD | Jiménez-Ferrer_2010 | not_relevant | 0 | 0 | Lisinopril appears only as a positive control in an in vitro ACE inhibition assay (87.18 ± 1.16% inhibition); no dose- or exposure-response relationship or PD parameters for lisinopril itself are reported or derivable. |
| popPK | Li_1997 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of Ang-(1-7) and bradykinin in canine coronary arteries, using lisinopril only as a positive control ACE inhibitor, with no pharmacokinetic parameters reported. |
| popPK | Li_1998 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of losartan on platelet aggregation and vasoconstriction in rats, with lisinopril serving only as a negative control agent. |
| PD | Li_1998 | not_relevant | 0 | 0 | Lisinopril appears only as a negative control (1 microM, no effect on U46619-induced constriction); all PD/concentration-response relationships (EC50 shifts, Emax) are for losartan/EXP3174, not lisinopril. |
| popPK | Li_2000 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of irbesartan on vasoconstriction and platelet aggregation, with lisinopril serving only as a negative control without any pharmacokinetic parameter reporting. |
| PD | Li_2000 | not_relevant | 0 | 0 | Lisinopril appears only as a negative control (no effect on U46619-induced vasoconstriction); all PD/dose-response data (EC50 shifts, concentration-dependent inhibition) pertain to irbesartan, not lisinopril. |
| popPK | Marchetti_2003 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of angiotensin I effects on rat glomerular arterioles, using lisinopril only as a tool compound to inhibit ACE, with no pharmacokinetic parameters reported. |
| popPK | Sundström_2023 | irrelevant | 0 | 0 | The study is a clinical trial assessing blood pressure response to antihypertensive drugs, not a pharmacokinetic study, and reports no PK parameters for lisinopril. |
| popPK | Thomson_1987 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding lisinopril pharmacokinetics. |
| popPK | Vandenburgh_2009 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological screening of muscle function in mdx myoblasts, not a pharmacokinetic study, and reports no disposition parameters for lisinopril. |
| PD | Vandenburgh_2009 | not_relevant | 2 | 1 | Lisinopril is only listed among compounds that increased tetanic force in an in vitro mdx muscle assay; no numeric PD parameters (EC50, Emax, etc.) or effect-concentration curve are reported for lisinopril (EC50s given only for glucocorticoids). |
| popPK | Yilmaz_2026 | irrelevant | 0 | 0 | The study is a clinical trial assessing hemodynamic and vascular effects (FMD, CFR) of lisinopril, not a pharmacokinetic study reporting disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 06:36 UTC</sub>
