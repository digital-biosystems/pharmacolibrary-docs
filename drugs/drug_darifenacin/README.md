<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G04B&quot;,&quot;href&quot;:&quot;atc/G04B.md&quot;},{&quot;label&quot;:&quot;darifenacin&quot;}]"></div>

# darifenacin

- **generic name:** darifenacin
- **ATC codes:** `G04BD10`
- **DrugBank:** [DB00496](https://go.drugbank.com/drugs/DB00496) · **PubChem:** [CID 444031](https://pubchem.ncbi.nlm.nih.gov/compound/444031)
- **molar mass:** 426.55 g/mol (C28H30N2O2) — DrugBank
- **groups:** approved, investigational

## About

Darifenacin is a muscarinic antagonist used to treat urinary frequency and incontinence, such as in overactive bladder. It is an approved drug, though it does not appear to be authorised centrally in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q166476](https://www.wikidata.org/wiki/Q166476) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| darifenacin | parent | 426.55 | C28H30N2O2 | DrugBank | [444031](https://pubchem.ncbi.nlm.nih.gov/compound/444031) | Kerbusch_2003 |
| hydroxylated metabolite | metabolite | 442.559 | C28H30N2O3 | PubChem | [54085540](https://pubchem.ncbi.nlm.nih.gov/compound/54085540) | Kerbusch_2003 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:18 | 3:06 | 0/1/0 | 1/0/0 | 0/0/0 | 78,615/8,259 | einfracz / qwen3.8-27b | 2 | 2/0 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Kerbusch_2003_reference](drugs/drug_darifenacin/Darifenacin_Kerbusch2003_reference.md) | — | parent + metabolite (no model) | 4 (+1 cov.) | Kerbusch T et al., Population pharmacokinetic modelling of…, British journal of clinical… (2003) | [10.1046/j.1365-2125.2003.01967.x](https://doi.org/10.1046/j.1365-2125.2003.01967.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Kerbusch_2004_SF](drugs/drug_darifenacin/pd_Kerbusch_2004_SF.md) | salivary flow ← active moiety (darifenacin and hydroxylated metabolite) · target-mediated drug disposition | — | Kerbusch T et al., Assessment of the relative in vivo pote…, British journal of clinical… (2004) | [10.1046/j.1365-2125.2003.01988.x](https://doi.org/10.1046/j.1365-2125.2003.01988.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=darifenacin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` inhibitor/substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CHRM1 (target), CHRM2 (target), CHRM3 (target), CHRM4 (target), CHRM5 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Choppin_1998 | irrelevant | 0 | 0 | The study is a pharmacological receptor characterization (pKB values) in rabbit tissue, not a pharmacokinetic study reporting disposition parameters for darifenacin. |
| popPK | Choppin_2001 | irrelevant | 0 | 0 | The study is an in vitro pharmacological receptor binding/functional assay in mouse bladder tissue, not a pharmacokinetic study measuring disposition parameters like clearance or volume. |
| popPK | Choppin_2001_2 | irrelevant | 0 | 0 | This is a pharmacological receptor binding/functional study in dogs, not a pharmacokinetic study reporting disposition parameters for darifenacin. |
| popPK | Kerbusch_2004 | irrelevant | 3 | 1 | The study uses a pre-existing population PK model to estimate pharmacodynamic potency and does not report numeric PK parameter estimates (CL, V, etc.) for darifenacin in the provided text. |
| popPK | Kurjak_1999 | irrelevant | 0 | 0 | This is an in vitro receptor binding and pharmacological study, not a pharmacokinetic study reporting disposition parameters for darifenacin. |
| popPK | Schneider_2005 | irrelevant | 0 | 0 | The study is an in vitro pharmacological investigation of bladder contractility and receptor binding in rats, not a pharmacokinetic study reporting disposition parameters for darifenacin. |
| popPK | Unno_2003 | irrelevant | 0 | 0 | This is a receptor pharmacology study in guinea-pig ileum using darifenacin as an antagonist, not a pharmacokinetic study. |
| popPK | Yuan_2011 | irrelevant | 0 | 0 | Darifenacin is used as a pharmacological antagonist in an in-vitro mechanistic study of rat ileum contractions, not as a subject drug for PK analysis. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 09:17 UTC</sub>
