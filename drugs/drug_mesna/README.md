<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R05C&quot;,&quot;href&quot;:&quot;atc/R05C.md&quot;},{&quot;label&quot;:&quot;mesna&quot;}]"></div>

# mesna

- **generic name:** mesna
- **ATC codes:** `R05CB05`, `V03AF01`
- **DrugBank:** [DB09110](https://go.drugbank.com/drugs/DB09110) · **PubChem:** [CID 598](https://pubchem.ncbi.nlm.nih.gov/compound/598)
- **molar mass:** 142.197 g/mol (C2H6O3S2) — DrugBank
- **groups:** approved, investigational

## About

Mesna is a protective agent used to prevent bladder damage in patients receiving certain cancer chemotherapy, and is also classified as a mucolytic for respiratory conditions. It is approved and included on the WHO list of essential medicines, so it remains in widespread clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q424997](https://www.wikidata.org/wiki/Q424997) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| mesna | parent | 142.197 | C2H6O3S2 | DrugBank | [598](https://pubchem.ncbi.nlm.nih.gov/compound/598) | Smith_2003, el-Yazigi_1997 |
| dimesna | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:50 | 0:57 | 0/1/1 | 0/0/1 | 0/0/0 | 29,055/4,920 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q88, Q307 — no SI value to build fr…</sub><br><sub>route_to: `human_review`</sub> | [Smith_2003_reference](drugs/drug_mesna/Mesna_Smith2003_reference.md) | — | 1-compartment (no model) | 5 | Smith PF et al., Pharmacokinetics and pharmacodynamics o…, Journal of clinical pharmac… (2003) | [10.1177/0091270003260332](https://doi.org/10.1177/0091270003260332) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [el-Yazigi_1997_reference](drugs/drug_mesna/Mesna_elYazigi1997_reference.md) | — | parent + metabolite (no model) | 11 | el-Yazigi A et al., Pharmacokinetics of mesna and dimesna a…, Journal of clinical pharmac… (1997) | [10.1002/j.1552-4604.1997.tb04344.x](https://doi.org/10.1002/j.1552-4604.1997.tb04344.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Smith_2003_plasma_cysteine](drugs/drug_mesna/pd_Smith_2003_plasma_cysteine.md) | plasma cysteine ← mesna · direct Emax (saturable) effect | — | Smith PF et al., Pharmacokinetics and pharmacodynamics o…, Journal of clinical pharmac… (2003) | [10.1177/0091270003260332](https://doi.org/10.1177/0091270003260332) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=mesna) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Smith_2003.pdf` | Smith PF et al., Pharmacokinetics and pharmacodynamics o…, Journal of clinical pharmac… (2003) | popPK | 10 | [10.1177/0091270003260332](https://doi.org/10.1177/0091270003260332) | [14615468](https://pubmed.ncbi.nlm.nih.gov/14615468) | The paper reports specific quantitative pharmacokinetic parameters (Vss, CL, half-life) for mesna in humans. |
| `el-Yazigi_1997.pdf` | el-Yazigi A et al., Pharmacokinetics of mesna and dimesna a…, Journal of clinical pharmac… (1997) | popPK | 10 | [10.1002/j.1552-4604.1997.tb04344.x](https://doi.org/10.1002/j.1552-4604.1997.tb04344.x) | [9243355](https://pubmed.ncbi.nlm.nih.gov/9243355) | The study reports quantitative two-compartment pharmacokinetic parameters (clearance, volume of distribution, half-life) for mesna in humans, with all numeric values explicitly provided in the text. |

<sub>queue written 2026-10-07T21:49:34.521413+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Conklin_2009 | not_relevant | 0 | 0 | The paper studies a gene variant's effect on cyclophosphamide toxicity and reports that mesna prevents this toxicity, but it does not report a pharmacokinetic or pharmacodynamic parameter of mesna itself being altered by the gene variant. |
| popPK | Engin_2021 | irrelevant | 0 | 0 | Mesna is used only as a comparator treatment in a mouse model of cystitis, and no pharmacokinetic parameters for mesna are reported. |
| PGx | Howell_2008 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (ifosfamide and aprepitant) affecting toxicity, but does not report pharmacogenomic effects on mesna's PK or PD parameters. |
| PGx | Kellie_1988 | not_relevant | 0 | 0 | The paper is a clinical trial evaluating ifosfamide efficacy and toxicity in neuroblastoma patients and does not contain any data on pharmacogenomics, gene variants, or their effect on mesna PK/PD parameters. |
| PGx | Krum_2002 | not_relevant | 0 | 0 | The paper describes in vitro kinetic and microcalorimetric analysis of a bacterial enzyme (EaCoMT) and its substrate/cofactor interactions, not human pharmacogenomics or mesna PK/PD. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 21:49 UTC</sub>
