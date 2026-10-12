<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D10A&quot;,&quot;href&quot;:&quot;atc/D10A.md&quot;},{&quot;label&quot;:&quot;resorcinol&quot;}]"></div>

# resorcinol

- **generic name:** resorcinol
- **ATC codes:** `D10AX02`, `S01AX06`
- **DrugBank:** [DB11085](https://go.drugbank.com/drugs/DB11085) · **PubChem:** [CID 5054](https://pubchem.ncbi.nlm.nih.gov/compound/5054)
- **molar mass:** 110.1106 g/mol (C6H6O2) — DrugBank
- **groups:** approved, investigational

## About

Resorcinol is a topical agent used to treat acne, and is also classified as an ophthalmological antiinfective. It remains an approved drug, used mainly in topical skin preparations.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q408865](https://www.wikidata.org/wiki/Q408865) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:27 | 0:59 | 0/0/0 | 0/0/1 | 0/0/0 | 96,511/1,586 | einfracz / qwen3.8-27b | 5 | 0/5 | 5/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span> | [Jarque_2018_tg_mCherry](drugs/drug_resorcinol/pd_Jarque_2018_tg_mCherry.md) | tg:mCherry fluorescence ← resorcinol · direct sigmoid Emax (Hill) effect | — | Jarque S et al., An automated screening method for detec…, PloS one (2018) | [10.1371/journal.pone.0203087](https://doi.org/10.1371/journal.pone.0203087) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 17 matched, 13 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Calza_2008 | irrelevant | 0 | 0 | The paper studies the photodegradation of phenol in seawater and the toxicity of resulting byproducts, including resorcinol, but contains no pharmacokinetic data for resorcinol. |
| popPK | Cascio_2006 | irrelevant | 0 | 0 | The study investigates the pharmacological activity of cannabinoid receptor ligands derived from resorcinol, not the pharmacokinetics of resorcinol itself. |
| popPK | Cho_2023 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on CB2 receptor agonists where resorcinol is mentioned only as a structural motif, with no pharmacokinetic data reported. |
| popPK | Gibbs_2013 | irrelevant | 0 | 0 | The study is an in-vitro toxicology assay for contact sensitization potency and does not report any pharmacokinetic parameters for resorcinol. |
| popPK | Jarque_2018 | irrelevant | 0 | 0 | The paper describes a zebrafish embryo screening assay for goitrogenic (thyroid-disrupting) activity, not a pharmacokinetic study of resorcinol. |
| popPK | Krüger_2008 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic assay of receptor activation (AhR/AR) by resorcinol, not a pharmacokinetic study. |
| popPK | Leonard_2016 | irrelevant | 2 | 0 | Resorcinol is one of six chemicals tested in a broad PBPK modeling study for thyroid toxicity, but no specific quantitative PK parameters (CL, V, etc.) for resorcinol are provided in the evidence. |
| popPK | Lind_2015 | irrelevant | 0 | 0 | The study investigates the permeation of resorcinol through protective gloves in an in-vitro setup, not pharmacokinetic disposition parameters in a biological subject. |
| popPK | Mikolajczyk_2018 | irrelevant | 0 | 0 | The paper investigates the electrochemical degradation of resorcinol on electrode materials (electrochemistry/mechanism) and does not report pharmacokinetic parameters. |
| popPK | Mikolajczyk_2019 | irrelevant | 0 | 0 | The paper investigates the electrochemical degradation of resorcinol in an in-vitro system, not pharmacokinetic parameters in a biological system. |
| popPK | Smoum_2022 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on fenchone-resorcinol derivatives as CB2 ligands, not a pharmacokinetic study of resorcinol. |
| popPK | Waaijers_2013 | irrelevant | 0 | 0 | The paper investigates the toxicity of flame retardants in Daphnia magna and does not involve resorcinol or pharmacokinetics. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | The paper describes a fluorescence biosensor for detecting estrogenic activity and lists a phosphate compound containing "resorcinol" as a test analyte, but contains no pharmacokinetic data for the drug resorcinol. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
