<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A12A&quot;,&quot;href&quot;:&quot;atc/A12A.md&quot;},{&quot;label&quot;:&quot;calcium lactate gluconate&quot;}]"></div>

# calcium lactate gluconate

- **generic name:** calcium lactate gluconate
- **ATC codes:** `A12AA06`
- **DrugBank:** [DB13365](https://go.drugbank.com/drugs/DB13365) · **PubChem:** not captured
- **groups:** investigational

## About

Calcium lactate gluconate is a calcium salt that has been used as a calcium supplement to treat or prevent low calcium levels. It is listed as investigational, so it does not appear to be an approved medicine in major markets.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q414151](https://www.wikidata.org/wiki/Q414151) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 08:44 | 2:00 | 0/0/0 | 0/0/0 | 0/0/0 | 65,225/2,375 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 3/4 | 6/1 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 36 matched, 35 returned
- **screened:** 2  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Almurisi_2020 | not_relevant | 0 | 0 | The paper focuses on the formulation and palatability of a paracetamol jelly; calcium lactate gluconate is used only as a gelling agent, and no pharmacodynamic or exposure-response data are reported. |
| popPK | Ansari_2025 | irrelevant | 1 | 1 | The study reports pharmacokinetic parameters for calcium gluconate, not calcium lactate gluconate. |
| popPK | BERNSTEIN_1962 | irrelevant | 2 | 2 | The study measures renal clearance of calcium ion (a physiological electrolyte) rather than the pharmacokinetic disposition parameters (CL, V, ka) of the drug calcium lactate gluconate. |
| popPK | Bateman_2016 | irrelevant | 0 | 0 | The paper is a collection of abstracts from an intensive care symposium focusing on sepsis, infections, and coagulation, with no mention of calcium_lactate_gluconate pharmacokinetics. |
| popPK | Belolipetskaia_2011 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of paracetamol, rimantadine, and loratadine in a combination drug, with calcium gluconate listed as an ingredient but not the subject of PK analysis. |
| popPK | Benny_2026 | irrelevant | 0 | 0 | The study reports clinical incidence of hypocalcemia and does not provide pharmacokinetic parameters (CL, V, etc.) for calcium lactate gluconate. |
| popPK | Block_2012 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of denosumab, not calcium_lactate_gluconate, which is only mentioned as a treatment for adverse events. |
| popPK | Chu_2001 | irrelevant | 0 | 0 | The study investigates bone formation markers (PICP) in response to bicarbonate therapy, using calcium gluconate only to maintain calcium levels, and does not report pharmacokinetic parameters for calcium. |
| popPK | Dodion_1986 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of torasemide and furosemide, with calcium gluconate used only as a co-administered agent to compensate for electrolyte loss, not as the subject drug. |
| popPK | Dong_2026 | irrelevant | 0 | 0 | The study focuses on the delivery of melatonin, and calcium gluconate is used only as a formulation excipient for gel formation, not as the subject drug for PK analysis. |
| popPK | Farkas_2018 | irrelevant | 0 | 0 | The paper is a case report on fluoride poisoning treatment and does not report pharmacokinetic parameters for calcium lactate gluconate. |
| popPK | Feng_1994 | irrelevant | 0 | 0 | The study investigates renal physiology and PTH responses in chicks, using calcium gluconate only as a tool to block PTH secretion, not as a subject of pharmacokinetic analysis. |
| popPK | Han_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of oxaliplatin and the effect of calcium gluconate infusions on oxaliplatin clearance, not the pharmacokinetic parameters of calcium lactate gluconate itself. |
| popPK | Jensen-Fangel_2003 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of nelfinavir and its metabolite M8, using calcium supplements only as a co-administered agent to treat diarrhea, not as the subject drug. |
| popPK | Kaisbain_2023 | irrelevant | 0 | 0 | The paper is a clinical case report describing the use of calcium gluconate to treat verapamil-induced hypotension, and it does not report any quantitative pharmacokinetic parameters (e.g., clearance, volume of distribution) for calcium gluconate. |
| popPK | Kanaris_2026 | irrelevant | 0 | 0 | The paper is a narrative review comparing calcium gluconate and calcium chloride for clinical efficacy and safety, and it does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for calcium_lactate_gluconate. |
| PD | Kim_2013 | not_relevant | 0 | 0 | The paper is an acute toxicity study reporting no adverse effects up to 2000 mg/kg and an LD50 &gt; 2000 mg/kg, but it does not report any pharmacodynamic exposure-response or dose-response relationship with numeric PD parameters (e.g., Emax, EC50) for calcium lactate gluconate. |
| popPK | Kotchen_1977 | irrelevant | 0 | 0 | The study investigates the physiological effect of calcium gluconate on renin release in dogs, not its pharmacokinetic disposition parameters (CL, V, etc.). |
| popPK | Mandal_1992 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of oxytetracycline, with calcium gluconate acting only as a co-administered agent to induce hypercalcemia, not as the subject drug. |
| popPK | McCabe_2026 | irrelevant | 0 | 0 | The paper is a retrospective cohort study on hospital resource utilization and triage patterns for poisoned patients, not a pharmacokinetic study, and calcium gluconate is only mentioned as a therapy used. |
| popPK | Misawa_1985 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding calcium lactate gluconate pharmacokinetics. |
| popPK | Miyazaki_2003 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of salmon calcitonin and calcium gluconate (as a probe), not calcium lactate gluconate. |
| popPK | Nowak_2008 | irrelevant | 2 | 0 | The study compares calcium fumarate and calcium gluconate (not calcium lactate gluconate) and reports only bioequivalence metrics (AUC, Cmax) without specific PK parameter values like clearance or volume. |
| popPK | Pearigen_1991 | irrelevant | 0 | 0 | The paper is a review of calcium antagonist poisoning management and does not report pharmacokinetic parameters for calcium lactate gluconate. |
| popPK | Pyrpasopoulos_1983 | irrelevant | 0 | 0 | The study investigates the effect of calcium gluconate on glucose tolerance in uraemic patients and does not report pharmacokinetic parameters (CL, V, etc.) for the drug. |
| popPK | Sansoè_2007 | irrelevant | 0 | 0 | The study investigates the physiological effects of calcium infusion on renal sodium handling in cirrhosis, not the pharmacokinetic disposition parameters (CL, V, etc.) of calcium lactate gluconate. |
| popPK | Seeling_1985 | irrelevant | 0 | 0 | The text is a clinical review of water and electrolyte imbalances that mentions calcium gluconate only as a therapeutic agent for hyperkalemia, without reporting any pharmacokinetic parameters. |
| popPK | Suzuki_2009 | irrelevant | 0 | 0 | This is a clinical case report of hyperkalemia treatment, not a pharmacokinetic study, and it does not report any quantitative disposition parameters (CL, V, etc.) for calcium gluconate. |
| popPK | Thompson_1984 | irrelevant | 0 | 0 | The paper is a clinical case report of primary hyperparathyroidism in dogs and does not report pharmacokinetic parameters for calcium lactate gluconate. |
| popPK | Torrance_1989 | irrelevant | 0 | 0 | The study focuses on the validation of a parathormone (PTH) assay in dogs, using calcium gluconate only as a stimulus for parathyroid function testing, not as the subject of pharmacokinetic analysis. |
| popPK | Warneke_1993 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of fluoride from sodium monofluorophosphate, not calcium_lactate_gluconate. |
| popPK | Warneke_1993_2 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of fluoride from glutamine monofluorophosphate, not calcium_lactate_gluconate. |
| popPK | Yang_2010 | irrelevant | 0 | 0 | The study is an in-vitro antibacterial assay where calcium gluconate is used only as a reagent for gel preparation, not as a subject drug for pharmacokinetic analysis. |
| popPK | Yang_2019 | irrelevant | 0 | 0 | The study investigates the therapeutic effects of Huashi Pill on renal stones in rats, using calcium gluconate only as an agent to induce the disease model, not as the subject of pharmacokinetic analysis. |
| popPK | de_2025 | irrelevant | 0 | 0 | The paper is a case report on sotalol overdose where calcium gluconate was used as a therapeutic agent, not the subject of pharmacokinetic analysis. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
