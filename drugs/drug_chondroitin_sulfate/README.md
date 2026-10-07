<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;chondroitin sulfate&quot;}]"></div>

# chondroitin sulfate

- **generic name:** chondroitin sulfate
- **ATC codes:** `M01AX25`
- **DrugBank:** [DB09301](https://go.drugbank.com/drugs/DB09301) · **PubChem:** not captured
- **groups:** approved, investigational, nutraceutical

## About

Chondroitin sulfate is a sulfated glycosaminoglycan used as a medication, mainly for joint problems such as osteoarthritis. It is approved and widely available, often sold as a dietary supplement, and is also being studied for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q408014](https://www.wikidata.org/wiki/Q408014) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:45 | 0:39 | 0/0/0 | 0/0/0 | 0/0/0 | 119,999/2,005 | einfracz / qwen3.8-27b | 5 | 5/0 | 5/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=chondroitin_sulfate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | blood | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ARSB (substrate), BDNF (unknown), CCL2 (unknown), GALNS (substrate), GDNF (unknown), GUSB (substrate), HEXB (substrate), IDS (substrate), IDUA (substrate), VEGFA (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 16 matched, 12 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alberdi_1998 | irrelevant | 0 | 0 | The paper is a mechanistic study of protein-glycosaminoglycan binding and does not report pharmacokinetic parameters for chondroitin sulfate. |
| popPK | Buyue_2009 | irrelevant | 0 | 0 | The paper describes a mechanistic study on the anticoagulant properties of fucosylated chondroitin sulfate (DHG) on thrombin generation, not its pharmacokinetic disposition (CL, Vd, etc.). |
| popPK | Fayad_2019 | irrelevant | 0 | 0 | The paper is an in-vitro enzymatic study of hyaluronidase inhibition by oligosaccharides and does not report pharmacokinetic parameters for chondroitin sulfate. |
| popPK | Homma_2005 | irrelevant | 0 | 0 | The study investigates the biochemical interaction between polyamines and glycosaminoglycans on coagulation and fibrinolysis in vitro, not the pharmacokinetics of chondroitin sulfate. |
| popPK | Huang_2013 | irrelevant | 0 | 0 | The paper is a pharmacodynamic/antiviral study evaluating the mechanism and potency of FuCS-1 against HIV, containing no pharmacokinetic or disposition parameters. |
| popPK | Johnson_2024 | irrelevant | 0 | 0 | The study is a behavioral pharmacology investigation in zebrafish and does not report any pharmacokinetic parameters for chondroitin sulfate. |
| popPK | Park_2012 | irrelevant | 0 | 0 | The study is an in-vitro microfluidic device characterization using chondroitin sulfate proteoglycan as a test biomolecule to demonstrate compartmental isolation, not a pharmacokinetic study. |
| popPK | Peng_2019 | irrelevant | 0 | 0 | The paper describes the engineering of DARPins to neutralize Clostridium difficile toxin B and characterizes their binding to chondroitin sulfate proteoglycan 4 (CSPG4), not the pharmacokinetics of chondroitin sulfate as a drug. |
| popPK | Simeon_2019 | irrelevant | 0 | 0 | The paper studies DARPins that bind C. difficile toxin B and mentions chondroitin sulfate proteoglycan 4 (CSPG4) as a receptor, but does not report pharmacokinetic parameters for chondroitin sulfate. |
| popPK | Uematsu_2026 | irrelevant | 0 | 0 | The study compares clinical outcomes (pain scores, disc degeneration) of chondroitin sulfate-degrading enzyme therapy vs. surgery and contains no pharmacokinetic parameters. |
| popPK | Vergés_2004 | irrelevant | 2 | 0 | The paper is a review/commentary proposing criteria for bioequivalence based on pharmacodynamic parameters (Emax, T50) rather than reporting quantitative pharmacokinetic parameters (CL, V, ka) for chondroitin sulfate. |
| popPK | Yao_2023 | irrelevant | 0 | 0 | The paper is a structural characterization and in-vitro anticoagulant activity study of glycosaminoglycans from fish swim bladders, containing no pharmacokinetic data. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
