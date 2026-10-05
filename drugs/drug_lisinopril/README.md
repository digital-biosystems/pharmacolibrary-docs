<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09A&quot;,&quot;href&quot;:&quot;atc/C09A.md&quot;},{&quot;label&quot;:&quot;lisinopril&quot;}]"></div>

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
| 2026-09-30 23:33 | 9:07 | 0/1/2 | 2/0/0 | 0/0/0 | 351,535/49,105 | ollama / glm-5.3-flash | 11 | 9/2 | 2/9 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.875). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Sandra_2024_reference](drugs/drug_lisinopril/Lisinopril_Sandra2024_reference.md) | — | 1-compartment (no model) | 3 | Sandra L et al., Population pharmacokinetics of lisinopr…, British journal of clinical… (2024) | [10.1111/bcp.15936](https://doi.org/10.1111/bcp.15936) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Thomson_1989_reference](drugs/drug_lisinopril/Lisinopril_Thomson1989_reference.md) | — | 1-compartment (no model) | 1 | Thomson AH et al., Lisinopril population pharmacokinetics…, British journal of clinical… (1989) | [10.1111/j.1365-2125.1989.tb05335.x](https://doi.org/10.1111/j.1365-2125.1989.tb05335.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">rat</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Medhora_2021_reference](drugs/drug_lisinopril/Lisinopril_Medhora2021_reference.md) | — | 2-compartment (no model) | 8 | Medhora M et al., Radiation Increases Bioavailability of…, Frontiers in pharmacology (2021) | [10.3389/fphar.2021.646076](https://doi.org/10.3389/fphar.2021.646076) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [Li_1997_BK_induced_vasorelaxation](drugs/drug_lisinopril/pd_Li_1997_BK_induced_vasorelaxation.md) | BK-induced vasorelaxation ← angiotensin-(1-7) · direct sigmoid Emax (Hill) effect | — | Li P et al., Angiotensin-(1-7) augments bradykinin-i…, Hypertension (Dallas, Tex.… (1997) | [10.1161/01.hyp.29.1.394](https://doi.org/10.1161/01.hyp.29.1.394) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [Li_1997_EC50](drugs/drug_lisinopril/pd_Li_1997_EC50.md) | BK EC50 (half-maximal relaxation concentration) ← angiotensin-(1-7) · direct sigmoid Emax (Hill) effect | — | Li P et al., Angiotensin-(1-7) augments bradykinin-i…, Hypertension (Dallas, Tex.… (1997) | [10.1161/01.hyp.29.1.394](https://doi.org/10.1161/01.hyp.29.1.394) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Marchetti_2003_nM](drugs/drug_lisinopril/pd_Marchetti_2003_nM.md) | intracellular calcium concentration ← angiotensin I · direct Emax (saturable) effect | — | Marchetti J et al., ACE and non-ACE mediated effect of angi…, American journal of physiol… (2003) | [10.1152/ajpheart.00042.2003](https://doi.org/10.1152/ajpheart.00042.2003) |

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
- **records:** 3  ·  extracted 0  ·  needs_review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Sandra_2024.pdf` | Sandra L et al., Population pharmacokinetics of lisinopr…, British journal of clinical… (2024) | popPK | 10 | [10.1111/bcp.15936](https://doi.org/10.1111/bcp.15936) | [37864281](https://pubmed.ncbi.nlm.nih.gov/37864281) | Population PK study of lisinopril in children with full numeric parameter values (ka, V, CL with CIs) reported directly in the abstract. |
| `Ajayi_1985.pdf` | Ajayi AA et al., Pharmacodynamics and population pharmac…, International journal of cl… (1985) | popPK | 8 | not captured | [3005181](https://pubmed.ncbi.nlm.nih.gov/3005181) | A population-PK analysis of lisinopril in man reporting ka, V and CL is described, but the abstract gives no numeric parameter values, which likely reside in the full paper's tables/figures not provided here. |
| `Bellissant_1996.pdf` | Bellissant E et al., Pharmacokinetic-pharmacodynamic model r…, Journal of cardiovascular p… (1996) | popPK | 5 | [10.1097/00005344-199609000-00018](https://doi.org/10.1097/00005344-199609000-00018) | [8877596](https://pubmed.ncbi.nlm.nih.gov/8877596) | A lisinopril PK-PD study in healthy volunteers, but the evidence only contains PD (Hill model CE50/gamma/Emax) values; the actual PK disposition parameters (CL, V, t1/2) are not shown numerically here. |

<sub>queue written 2026-09-30T23:26:53.426395+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ajayi_1985 | relevant | 8 | 1 | A population-PK analysis of lisinopril in man reporting ka, V and CL is described, but the abstract gives no numeric parameter values, which likely reside in the full paper's tables/figures not provided here. |
| popPK | Bagaté_1999 | irrelevant | 0 | 0 | This is an in vitro vascular reactivity study of bradykinin receptors in the isolated perfused rat kidney; lisinopril is only used as an ACE-inhibition tool to prevent kinin catabolism, and no PK/disposition parameters for lisinopril are reported. |
| PD | Bagaté_1999 | not_relevant | 1 | 1 | Lisinopril appears only as a single fixed concentration (1 µM) modulating des-Arg9-BK vasoconstriction; no lisinopril concentration- or dose-response relationship or PD parameters for the drug are reported or derivable. |
| popPK | Bellissant_1996 | relevant | 5 | 3 | A lisinopril PK-PD study in healthy volunteers, but the evidence only contains PD (Hill model CE50/gamma/Emax) values; the actual PK disposition parameters (CL, V, t1/2) are not shown numerically here. |
| popPK | Chadwick_2015 | irrelevant | 0 | 0 | This is a gene-expression/MR-function study in skeletal muscle; lisinopril is only a co-administered treatment and no pharmacokinetic parameters (CL, V, ka, half-life, PK model) are reported anywhere in the evidence. |
| PD | Chadwick_2015 | not_relevant | 1 | 1 | The EC50/IC50 values are in vitro receptor pharmacology (aldosterone/spironolactone on MR in myotubes), not a lisinopril exposure- or dose-response relationship; lisinopril appears only as a fixed-dose combination treatment in mice with no PD parameters. |
| popPK | Fedorova_2015 | irrelevant | 0 | 0 | Lisinopril is only mentioned as a fixed component of the background antihypertensive therapy; no PK parameters (CL, V, ka, half-life, or model) for lisinopril are reported anywhere in the evidence. |
| PD | Fedorova_2015 | not_relevant | 0 | 0 | Lisinopril appears only as fixed background therapy in resistant hypertension patients; all PD relationships (MBG/canrenone effects on Na/K-ATPase, collagen, nitroprusside EC50) concern marinobufagenin/spironolactone, not lisinopril exposure or dose. |
| popPK | Jiménez-Ferrer_2010 | irrelevant | 1 | 1 | This is a pharmacodynamic/ACE-inhibition study of Salvia elegans extracts; lisinopril appears only as a reference ACE inhibitor in an in vitro assay, with no PK disposition parameters for lisinopril reported. |
| PD | Jiménez-Ferrer_2010 | not_relevant | 0 | 0 | Lisinopril appears only as a positive control in an in vitro ACE inhibition assay (87.18 ± 1.16% inhibition); no dose- or exposure-response relationship or PD parameters for lisinopril itself are reported or derivable. |
| popPK | Li_1997 | irrelevant | 1 | 1 | This is an in vitro canine coronary artery study where lisinopril is only an ACE-inhibition comparator (IC50 1.5 nmol/L reported), with no PK disposition parameters (CL, V, ka, half-life, or PK model) for lisinopril. |
| popPK | Li_1998 | irrelevant | 0 | 0 | This is a mechanistic pharmacology study of losartan in rat tissues; lisinopril appears only as a negative-control comparator with no PK parameters reported. |
| PD | Li_1998 | not_relevant | 0 | 0 | Lisinopril appears only as a negative control (1 microM, no effect on U46619-induced constriction); all PD/concentration-response relationships (EC50 shifts, Emax) are for losartan/EXP3174, not lisinopril. |
| popPK | Li_2000 | irrelevant | 0 | 0 | Lisinopril is only mentioned as a negative-control ACE inhibitor with no effect on vasoconstriction; no pharmacokinetic parameters for lisinopril are reported anywhere. |
| PD | Li_2000 | not_relevant | 0 | 0 | Lisinopril appears only as a negative control (no effect on U46619-induced vasoconstriction); all PD/dose-response data (EC50 shifts, concentration-dependent inhibition) pertain to irbesartan, not lisinopril. |
| popPK | Marchetti_2003 | irrelevant | 0 | 0 | This is an in vitro rat renal arteriole study using lisinopril only as a pharmacological ACE-inhibition tool; no PK disposition parameters (CL, V, ka, half-life, or population-PK model) for lisinopril are reported. |
| popPK | Sundström_2023 | irrelevant | 0 | 0 | This is a hypertension crossover trial comparing blood pressure responses to antihypertensive drugs (lisinopril only as a treatment arm); no PK parameters (CL, V, ka, half-life, or population-PK model) for lisinopril are reported anywhere in the evidence. |
| popPK | Thomson_1987 | irrelevant | 0 | 0 | The evidence contains only GROBID processing metadata with no paper text, tables, or numeric PK values, so nothing about lisinopril parameters can be assessed or extracted. |
| popPK | Vandenburgh_2009 | irrelevant | 0 | 0 | This is an in vitro tissue-engineered muscle drug-screening study where lisinopril is merely one of 31 compounds tested for effect on tetanic force; no pharmacokinetic parameters (CL, V, ka, half-life, or PK model) for lisinopril are reported anywhere. |
| PD | Vandenburgh_2009 | not_relevant | 2 | 1 | Lisinopril is only listed among compounds that increased tetanic force in an in vitro mdx muscle assay; no numeric PD parameters (EC50, Emax, etc.) or effect-concentration curve are reported for lisinopril (EC50s given only for glucocorticoids). |
| popPK | Yilmaz_2026 | irrelevant | 0 | 0 | This is a clinical vascular-function comparison of ACE inhibitors with no pharmacokinetic parameters (CL, V, ka, half-life, or PK model) reported for lisinopril; only dosing (10 mg/day) is mentioned. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-30 23:26 UTC</sub>
