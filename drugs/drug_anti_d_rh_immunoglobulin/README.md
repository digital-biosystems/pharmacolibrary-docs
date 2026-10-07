<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J06B&quot;,&quot;href&quot;:&quot;atc/J06B.md&quot;},{&quot;label&quot;:&quot;anti-D (rh) immunoglobulin&quot;}]"></div>

# anti-D (rh) immunoglobulin

- **generic name:** anti-D (rh) immunoglobulin
- **ATC codes:** `J06BB01`
- **DrugBank:** [DB11597](https://go.drugbank.com/drugs/DB11597) · **PubChem:** not captured
- **groups:** approved

## About

Anti-D immunoglobulin is a human antibody product used to prevent sensitisation to the RhD blood group, mainly in RhD-negative mothers during pregnancy and after delivery. It is an approved medicine, widely used in maternal care, and classified as a specific immunoglobulin for systemic use.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 14:03 | 1:02 | 0/0/0 | 0/1/0 | 0/0/0 | 10,938/1,065 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Chapman_1996_Rh_D_positive_red_cells_in_the_intravascular_space](drugs/drug_anti_d_rh_immunoglobulin/pd_Chapman_1996_Rh_D_positive_red_cells_in_the_intravascular_sp.md) | Rh D-positive red cells in the intravascular space ← anti-D immunoglobulin · target-mediated drug disposition | — | Chapman GE, A pharmacokinetic/pharmacodynamic model…, Transfusion medicine (Oxfor… (1996) | [10.1111/j.1365-3148.1996.tb00073.x](https://doi.org/10.1111/j.1365-3148.1996.tb00073.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=anti_d_rh_immunoglobulin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: RHD (antibody).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Barrett_1999 | not_relevant | 0 | 0 | The study investigates HLA genotypes and viral clearance outcomes in HCV infection, not the pharmacokinetics or pharmacodynamics of anti-D immunoglobulin itself. |
| PGx | Barrett_2001 | not_relevant | 0 | 0 | The paper studies HCV infection outcomes and HLA associations, not pharmacogenomic effects on the PK/PD of anti-D immunoglobulin. |
| popPK | Chapman_1996 | irrelevant | 2 | 0 | The paper presents a theoretical model based on previously published data and does not contain quantitative PK parameter values (CL, V, etc.) in the provided text. |
| PGx | Fanning_2000 | not_relevant | 0 | 0 | The study investigates HLA associations with Hepatitis C viral clearance, not the pharmacokinetics or pharmacodynamics of anti-D immunoglobulin. |
| PGx | Fanning_2002 | not_relevant | 0 | 0 | The paper discusses HCV natural progression and HLA associations with viral clearance, not the pharmacokinetics or pharmacodynamics of anti-D immunoglobulin. |
| PGx | Fu_2024 | not_relevant | 1 | 0 | The paper is a review of the clinical application and genetic characteristics of RhD-negative populations in China, and it does not report any pharmacogenomic studies measuring changes in pharmacokinetic or pharmacodynamic parameters based on specific gene variants. |
| PGx | Grellier_1997 | not_relevant | 0 | 0 | The paper reports on the clearance of HCV and antibody status in a cohort, not on pharmacogenomic effects on the PK/PD of anti-D immunoglobulin. |
| PGx | Maas_1983 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of anti-D immunoglobulin (clearance of Rh-positive cells) in general volunteers and does not report pharmacogenomic effects of specific gene variants on PK or PD parameters. |
| PGx | Nattermann_2011 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on Hepatitis C viral clearance, not on a pharmacokinetic or pharmacodynamic parameter of the drug anti-D immunoglobulin. |
| popPK | Starcević_2011 | irrelevant | 0 | 0 | The paper is a clinical case report focused on the pathophysiology and treatment of hemolytic disease of the fetus and newborn, containing no pharmacokinetic modeling or quantitative disposition parameters for anti-D immunoglobulin. |
| PGx | Zibert_1997 | not_relevant | 0 | 0 | The paper investigates the natural history of HCV infection and antibody response in patients exposed to contaminated anti-D immunoglobulin, rather than pharmacogenomic effects on the drug's PK or PD. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
