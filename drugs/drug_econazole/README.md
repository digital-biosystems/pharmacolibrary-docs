<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D01A&quot;,&quot;href&quot;:&quot;atc/D01A.md&quot;},{&quot;label&quot;:&quot;econazole&quot;}]"></div>

# econazole

- **generic name:** econazole
- **ATC codes:** `D01AC03`, `G01AF05`
- **DrugBank:** [DB01127](https://go.drugbank.com/drugs/DB01127) · **PubChem:** [CID 3198](https://pubchem.ncbi.nlm.nih.gov/compound/3198)
- **molar mass:** 381.684 g/mol (C18H15Cl3N2O) — DrugBank
- **groups:** approved

## About

Econazole is a topical antifungal medicine used to treat skin fungal infections such as tinea, tinea pedis, pityriasis versicolor, and cutaneous candidiasis. It is an approved drug, applied topically to the skin and also available as a gynecological antiinfective.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q417141](https://www.wikidata.org/wiki/Q417141) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:42 | 2:16 | 0/0/0 | 0/0/0 | 0/0/0 | 42,318/1,251 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/0 | 2/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=econazole) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP2E1` inhibitor, `CYP3A4` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor | DrugBank actor |
| — | adipose tissue | `CYP19A1` inhibitor | DrugBank actor |
| — | ovary | `CYP19A1` inhibitor | DrugBank actor |
| — | testis | `CYP19A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: NR1I2 (partial agonist).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 175 matched, 81 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahn_2004 | irrelevant | 0 | 0 | The study is an electrophysiological investigation of ion channels in mouse cells where econazole is used only as a pharmacological blocker, not as a subject of pharmacokinetic analysis. |
| popPK | Bogle_1996 | irrelevant | 0 | 0 | The study is a mechanistic investigation of econazole's effect on nitric oxide synthase activity in vitro and in tissue rings, reporting no pharmacokinetic parameters. |
| popPK | Charbonneau_2001 | irrelevant | 0 | 0 | The study is a mechanistic investigation of calcium transport in rabbit nephron membranes where econazole is used only as a pharmacological inhibitor, not as the subject of pharmacokinetic analysis. |
| popPK | Cheng_2007 | irrelevant | 0 | 0 | The study investigates the mechanism of carvedilol-induced calcium signaling in hepatoma cells, using econazole only as a pharmacological inhibitor of calcium influx, not as the subject of a pharmacokinetic analysis. |
| popPK | Chou_2000 | irrelevant | 0 | 0 | The study investigates the effect of betulinic acid on calcium levels in cells, using econazole only as a non-pharmacokinetic inhibitor/control agent. |
| popPK | Christen_2014 | irrelevant | 0 | 0 | The study is an in-vitro toxicology assessment of antiandrogenic activity and does not report any pharmacokinetic parameters for econazole. |
| popPK | Jan_1999 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calcium signaling in MDCK cells where econazole is used only as a pharmacological inhibitor, not as the subject of pharmacokinetic analysis. |
| popPK | Jensen_1998 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology study characterizing a potassium channel, reporting only an IC50 for econazole as a channel blocker, not pharmacokinetic parameters. |
| popPK | Ko_1997 | irrelevant | 0 | 0 | The paper is a pharmacological study on rat spleen contraction where econazole is used only as a negative control agent, not as the subject of a pharmacokinetic analysis. |
| popPK | Liu_2002 | irrelevant | 0 | 0 | The study investigates the hepatoprotective effects of tetramethylpyrazine on econazole-induced liver injury and does not report pharmacokinetic parameters for econazole. |
| popPK | Odds_1984 | irrelevant | 0 | 0 | The study is an in-vitro assessment of antifungal activity (inhibition factors) and does not report pharmacokinetic parameters for econazole. |
| popPK | Svecova_2008 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP3A4 gene expression and PXR interactions, not a pharmacokinetic study reporting disposition parameters for econazole. |
| PGx | Svecova_2008 | not_relevant | 0 | 0 | The paper investigates the effect of econazole on CYP3A4 gene expression (drug-drug interaction mechanism) but does not report how a human gene variant or genotype alters the PK/PD of econazole. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
