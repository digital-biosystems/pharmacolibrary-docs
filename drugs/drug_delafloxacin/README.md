<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01M&quot;,&quot;href&quot;:&quot;atc/J01M.md&quot;},{&quot;label&quot;:&quot;delafloxacin&quot;}]"></div>

# delafloxacin

- **generic name:** delafloxacin
- **ATC codes:** `J01MA23`
- **DrugBank:** [DB11943](https://go.drugbank.com/drugs/DB11943) · **PubChem:** [CID 487101](https://pubchem.ncbi.nlm.nih.gov/compound/487101)
- **molar mass:** 440.76 g/mol (C18H12ClF3N4O4) — DrugBank
- **groups:** approved, investigational

## About

Delafloxacin is a fluoroquinolone antibiotic used to treat bacterial infections, including community-acquired infections. It is approved and authorised in the European Union, though it remains a relatively specialised antibacterial rather than a widely used one.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5253067](https://www.wikidata.org/wiki/Q5253067) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:49 | 0:34 | 0/0/0 | 2/0/0 | 0/0/0 | 37,108/1,515 | einfracz / qwen3.8-27b | 3 | 0/3 | 3/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Alexandre_2025_Totalpop](drugs/drug_delafloxacin/pd_Alexandre_2025_Totalpop.md) | total viable population ← delafloxacin · inhibition effect | — | Alexandre K et al., Effect of pH on antimicrobial activity…, Microbiology spectrum (2025) | [10.1128/spectrum.02338-25](https://doi.org/10.1128/spectrum.02338-25) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Lepak_2016_CFU](drugs/drug_delafloxacin/pd_Lepak_2016_CFU.md) | organism burden in the lung (CFU counts) biomarker turnover ← delafloxacin | — | Lepak AJ et al., In Vivo Pharmacodynamic Target Assessme…, Antimicrobial agents and ch… (2016) | [10.1128/AAC.00647-16](https://doi.org/10.1128/AAC.00647-16) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=delafloxacin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCG2` substrate | DrugBank actor |
| absorption | liver | `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | small intestine | `ABCG2` substrate | DrugBank actor |
| absorption | testis | `ABCG2` substrate | DrugBank actor |
| distribution | blood | `ALB` substrate | DrugBank actor |
| metabolism | liver | `CYP2C9` inducer, `CYP2E1` inducer, `CYP3A4` inducer, `UGT1A1` substrate, `UGT1A3` substrate, `UGT2B15` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer, `UGT1A1` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ABCB5 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lepak_2016.pdf` | Lepak AJ et al., In Vivo Pharmacodynamic Target Assessme…, Antimicrobial agents and ch… (2016) | popPK | 8 | [10.1128/AAC.00647-16](https://doi.org/10.1128/AAC.00647-16) | [27216072](https://pubmed.ncbi.nlm.nih.gov/27216072) | Reports single-dose non-compartmental PK parameters (Cmax, AUC, t1/2) for delafloxacin in mice, though population PK values (CL, V) are not explicitly listed. |

<sub>queue written 2026-10-07T11:49:07.752734+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alexandre_2025 | irrelevant | 1 | 0 | This is an in-vitro pharmacodynamic study measuring MICs and bacterial killing, not a pharmacokinetic study; PK parameters for simulations are in the supplementary material which is not provided. |
| popPK | Crass_2019 | irrelevant | 0 | 0 | The paper is a review discussing regulatory guidance for renal function estimation using delafloxacin only as an example, without providing original quantitative PK parameter values. |
| popPK | Gumbo_2020 | irrelevant | 0 | 0 | The study is an in-vitro investigation of MICs and efficacy of delafloxacin and other drugs against Mycobacterium abscessus, not a pharmacokinetic study. |
| popPK | Lv_2024 | relevant | 10 | 1 | The study is a population PK/PD trial for delafloxacin in humans, but the specific numeric parameter estimates (CL, V, Q, etc.) are located in Table 2, which is in the supplemental material and not provided in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
