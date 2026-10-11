<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D07A&quot;,&quot;href&quot;:&quot;atc/D07A.md&quot;},{&quot;label&quot;:&quot;clobetasol&quot;}]"></div>

# clobetasol

- **generic name:** clobetasol
- **ATC codes:** `D07AD01`, `D07CD01`, `S01BA17`
- **DrugBank:** [DB11750](https://go.drugbank.com/drugs/DB11750) · **PubChem:** [CID 5311051](https://pubchem.ncbi.nlm.nih.gov/compound/5311051)
- **molar mass:** 410.907 g/mol (C22H28ClFO4) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Clobetasol is a very potent topical corticosteroid used to treat inflammatory skin conditions such as various forms of dermatitis, including on the face, scalp, legs, and hands. It is an approved medicine, widely used in dermatology, and is also available in combination with antibiotics for skin use and as an ophthalmic anti-inflammatory agent.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4224007](https://www.wikidata.org/wiki/Q4224007) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:02 | 0:25 | 0/0/0 | 0/1/1 | 0/0/0 | 43,672/2,446 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Zvidzayi_2021_AUEC](drugs/drug_clobetasol/pd_Zvidzayi_2021_AUEC.md) | skin blanching response ← Clobetasol propionate · direct Emax (saturable) effect | — | Zvidzayi M et al., A Novel Approach to Assess the Potency…, Pharmaceutics (2021) | [10.3390/pharmaceutics13091456](https://doi.org/10.3390/pharmaceutics13091456) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Tapfumaneyi_2022_VCA](drugs/drug_clobetasol/pd_Tapfumaneyi_2022_VCA.md) | skin blanching ← clobetasol propionate · direct Emax (saturable) effect | — | Tapfumaneyi P et al., Fitting Pharmacodynamic Data to the, Molecular pharmaceutics (2022) | [10.1021/acs.molpharmaceut.2c00254](https://doi.org/10.1021/acs.molpharmaceut.2c00254) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=clobetasol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | kidney | `CYP3A5` inducer | DrugBank actor |
| metabolism | liver | `CYP3A4` inducer/substrate, `CYP3A5` inducer | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate, `CYP3A5` inducer | DrugBank actor |

<sub>Actors without a tissue in the table: PLA2G1B (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cechin_2014 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of NF-κB activation inhibition by glucocorticoids, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Rath_2022 | irrelevant | 0 | 0 | The study focuses on pharmacodynamic potency (Emax) via the vasoconstrictor assay, not pharmacokinetic parameters (CL, V, ka). |
| popPK | Suzuki_2015 | irrelevant | 0 | 0 | The study focuses on environmental monitoring and in vitro receptor agonist potency, not pharmacokinetic disposition parameters. |
| popPK | Tapfumaneyi_2022 | irrelevant | 0 | 0 | The study focuses on pharmacodynamic potency classification using an Emax model for skin blanching, not pharmacokinetic disposition parameters (CL, V, t1/2) for clobetasol. |
| popPK | Tsai_2004 | irrelevant | 1 | 0 | The study reports pharmacodynamic parameters (E(max), ED(50) from vasoconstriction assays) rather than pharmacokinetic disposition parameters (CL, V, t1/2) for clobetasol. |
| popPK | Weng_2026 | irrelevant | 0 | 0 | The study is a clinical efficacy trial comparing topical tacrolimus and clobetasol for oral lichen planus, containing no pharmacokinetic data. |
| popPK | Zvidzayi_2021 | irrelevant | 0 | 0 | The study reports pharmacodynamic potency parameters (Emax, ED50) from a vasoconstrictor assay rather than quantitative pharmacokinetic disposition parameters (CL, V, ka) for clobetasol. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
