<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;glucosamine&quot;}]"></div>

# glucosamine

- **generic name:** glucosamine
- **ATC codes:** `M01AX05`
- **DrugBank:** [DB01296](https://go.drugbank.com/drugs/DB01296) · **PubChem:** [CID 439213](https://pubchem.ncbi.nlm.nih.gov/compound/439213)
- **molar mass:** 179.1711 g/mol (C6H13NO5) — DrugBank
- **groups:** approved

## About

Glucosamine is used to treat osteoarthritis. It is an approved antiinflammatory and antirheumatic agent, classified among other non-steroidal agents for the musculo-skeletal system, and is widely available as a supplement and medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q327506](https://www.wikidata.org/wiki/Q327506) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:53 | 0:40 | 0/0/0 | 1/0/0 | 0/0/0 | 107,877/2,285 | einfracz / qwen3.8-27b | 6 | 2/4 | 6/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Esser_2023_cleavage](drugs/drug_glucosamine/pd_Esser_2023_cleavage.md) | glmS ribozyme self-cleavage biomarker turnover ← glucosamine-6-phosphate | — | Esser A et al., Characterization of the glmS Ribozymes…, Chemistry (Weinheim an der… (2023) | [10.1002/chem.202202376](https://doi.org/10.1002/chem.202202376) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=glucosamine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: DRD2 (target), IFNG (inhibitor), IL1B (inhibitor), RELA (inhibitor), SLC2A1 (substrate), SLC2A2 (substrate), SLC2A3 (substrate), SLC2A4 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 39 matched, 16 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Azevedo_2020 | irrelevant | 0 | 0 | The paper is an enzymology study on chitosanase production and characterization, not a pharmacokinetic study of glucosamine. |
| popPK | Bogoeva_2004 | irrelevant | 0 | 0 | The paper studies the binding of wheat germ agglutinin to hormones and N-acetyl-D-glucosamine, not the pharmacokinetics of the drug glucosamine. |
| popPK | Boros_2022 | irrelevant | 0 | 0 | The paper is an ecotoxicology study assessing the effects of chitosan and glucosamine on aquatic plants (Lemna minor), not a pharmacokinetic study reporting disposition parameters. |
| popPK | Caccese_1999 | irrelevant | 0 | 0 | The paper is an in vitro pharmacological study of mucin secretion where radiolabeled glucosamine is used as a cellular label, not a drug subject of pharmacokinetic analysis. |
| popPK | Chen_1999 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics and metabolism of 5-fluorouracil and 5-fluorouridine, using glucosamine as a modulator, rather than measuring the pharmacokinetic parameters of glucosamine itself. |
| popPK | Esser_2023 | irrelevant | 0 | 0 | The paper is an in-vitro enzymology study characterizing the glmS ribozyme mechanism and kinetics, not a pharmacokinetic study of glucosamine. |
| popPK | Gao_2024 | irrelevant | 0 | 0 | The paper is a chemistry study on the synthesis of pyrrole derivatives using glucosamine as a raw material, not a pharmacokinetic study of the drug glucosamine. |
| popPK | Kawamura_1978 | irrelevant | 0 | 0 | This is an in-vitro enzymology study on UDP-N-acetyl-D-mannosamine formation in bacteria, not a pharmacokinetic study of the drug glucosamine. |
| popPK | Lara-Lemus_1992 | irrelevant | 0 | 0 | The study characterizes the in vitro enzymatic kinetics of glucosamine-6-phosphate deaminase, not the pharmacokinetics of glucosamine. |
| popPK | Lin_2008 | irrelevant | 0 | 0 | The paper describes an industrial chemical engineering process for converting chitosan to oligomers using electrodialysis and contains no pharmacokinetic data for glucosamine. |
| popPK | Martí-Bonmatí_2009 | irrelevant | 2 | 0 | The study uses a pharmacokinetic model to analyze MR contrast agent kinetics (permeability K(trans)) as a tissue biomarker, not the systemic disposition of glucosamine. |
| popPK | Umezawa_2017 | irrelevant | 0 | 0 | The paper reports the synthesis and antifouling activity of glucosamine-based isocyanides, containing no pharmacokinetic data for glucosamine itself. |
| popPK | Wang_2024 | irrelevant | 0 | 0 | This is a microbiome study analyzing gut microbial diversity in dogs, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, etc.) for glucosamine. |
| popPK | Williamson_1990 | irrelevant | 0 | 0 | This is an in-vitro parasitology study using [3H]glucosamine as a metabolic tracer to label parasite antigens, not a pharmacokinetic study of glucosamine. |
| popPK | Wu_2024 | irrelevant | 0 | 0 | The paper reports the synthesis and antifungal activity of glucosamine derivatives, not the pharmacokinetics of glucosamine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
