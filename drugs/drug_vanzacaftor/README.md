<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R07A&quot;,&quot;href&quot;:&quot;atc/R07A.md&quot;},{&quot;label&quot;:&quot;Vanzacaftor&quot;}]"></div>

# Vanzacaftor

- **generic name:** Vanzacaftor
- **ATC codes:** `R07AX33`
- **DrugBank:** [DB18373](https://go.drugbank.com/drugs/DB18373) · **PubChem:** not captured
- **molar mass:** 617.77 g/mol (C32H39N7O4S) — DrugBank
- **groups:** approved, investigational

## About

Vanzacaftor is a CFTR corrector used, in combination with other medicines, to treat cystic fibrosis. It has been approved and is used for cystic fibrosis, though it is a recently introduced option.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:33 | 2:11 | 0/0/0 | 0/0/0 | 0/0/0 | 40,571/1,082 | einfracz / qwen3.8-27b | 9 | 2/7 | 9/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=vanzacaftor) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCG2` inhibitor | DrugBank actor |
| absorption | liver | `ABCG2` inhibitor | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCG2` inhibitor | DrugBank actor |
| absorption | testis | `ABCG2` inhibitor | DrugBank actor |
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ABCB5 (unknown), CFTR (positive allosteric modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 19 matched, 19 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Capurro_2026 | not_relevant | 2 | 10 | The paper discusses the rescue of a genetic defect (PD) by the drug, not a pharmacogenomic change in the drug's PK/PD parameters. |
| PGx | De_2026 | not_relevant | 5 | 0 | The paper is a review of diagnostic tools (theranostics/theratyping) for CFTR variants and does not report specific pharmacokinetic or pharmacodynamic effect sizes of vanzacaftor. |
| PGx | Hoppe_2025 | not_relevant | 0 | 0 | The paper reports a safety and efficacy trial in children and does not investigate the effect of gene variants on PK or PD parameters of vanzacaftor. |
| PGx | Hranec_2026 | not_relevant | 0 | 0 | The paper is a case report describing a patient's clinical history and symptoms; it does not contain pharmacokinetic or pharmacodynamic data or statistical analysis of genetic effects on drug response. |
| PGx | Iftikhar_2025 | not_relevant | 0 | 0 | The paper is a network meta-analysis comparing the efficacy of different drug regimens in a specific genotype population but does not report pharmacokinetic or pharmacodynamic changes resulting from a specific genetic variant. |
| PGx | Jackson_2026 | not_relevant | 0 | 0 | The text is a narrative review of eligibility criteria and does not report specific pharmacogenomic effect sizes on PK/PD parameters for vanzacaftor. |
| PGx | Keating_2025 | not_relevant | 1 | 0 | The study evaluates clinical efficacy (FEV1) in CF patients but does not report pharmacokinetic data or genotype-stratified PK analysis for vanzacaftor. |
| PGx | Kroes_2026 | not_relevant | 0 | 0 | The paper investigates the effect of CFTR gene variants (disease genotypes) on the efficacy of the drug, which is a pharmacodynamic effect of the patient's disease state, not a pharmacogenomic effect where a drug-metabolizing/transporting gene variant alters the drug's PK or PD parameters. |
| PGx | Mustafa_2026 | not_relevant | 0 | 0 | The text discusses pharmacokinetics during pregnancy and the therapeutic response of CFTR variants, but does not report specific pharmacogenomic effect sizes (e.g., allele-specific AUC or PD changes) for vanzacaftor. |
| PGx | Rayment_2026 | not_relevant | 0 | 0 | The study evaluates the clinical efficacy and safety of vanzacaftor in children with cystic fibrosis but does not report pharmacogenomic analyses or how specific gene variants alter PK/PD parameters. |
| PGx | Uluer_2023 | not_relevant | 0 | 0 | The paper reports clinical efficacy for CFTR mutations (F508del) but does not investigate pharmacokinetic or pharmacodynamic changes based on genetic variants of drug-metabolizing enzymes (CYPs/UGTs). |
| PGx | Wołkowicz_2026 | not_relevant | 0 | 0 | The paper is a clinical review of CFTR modulator therapy efficacy and landscape but does not report specific pharmacokinetic or pharmacodynamic changes driven by specific gene variants (pharmacogenomics) for vanzacaftor. |
| PGx | Yu_2026 | not_relevant | 0 | 0 | The paper discusses vanzacaftor's pharmacokinetics regarding drug-drug interactions (CYP3A inhibition/induction) but does not report any pharmacogenomic effects on its PK or PD parameters. |
| popPK | unknown_2025 | irrelevant | 0 | 0 | no_text gate: only 10 chars of text extracted (&lt; 400) |
| popPK | unknown_2025_2 | irrelevant | 0 | 0 | no_text gate: only 73 chars of text extracted (&lt; 400) |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
