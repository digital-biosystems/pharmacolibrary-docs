<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02A&quot;,&quot;href&quot;:&quot;atc/B02A.md&quot;},{&quot;label&quot;:&quot;aminomethylbenzoic acid&quot;}]"></div>

# aminomethylbenzoic acid

- **generic name:** aminomethylbenzoic acid
- **ATC codes:** `B02AA03`
- **DrugBank:** [DB13244](https://go.drugbank.com/drugs/DB13244) · **PubChem:** not captured
- **molar mass:** 151.1626 g/mol (C8H9NO2) — DrugBank
- **groups:** experimental

## About

Aminomethylbenzoic acid is an antifibrinolytic, a drug class used to stop excessive bleeding. It appears to be only an experimental compound and is not an established marketed medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q695442](https://www.wikidata.org/wiki/Q695442) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 16:34 | 0:22 | 0/0/0 | 0/0/0 | 0/0/0 | 5,598/273 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 1/5 | 6/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Busslinger_2023 | irrelevant | 0 | 0 | The paper studies radiopharmaceuticals where aminomethylbenzoic acid (AMBA) is used as a linker component, not as the subject drug for pharmacokinetic parameter extraction. |
| popPK | Garrison_2008 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of radiolabeled bombesin peptides, not aminomethylbenzoic acid, which is only mentioned as a structural component of a linker. |
| popPK | Ghosh_2017 | irrelevant | 0 | 0 | The paper studies the in vitro serum stability of a radiolabeled peptide probe, not the pharmacokinetics of aminomethylbenzoic acid. |
| popPK | Gourni_2011 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of the radiolabeled peptide 68Ga-CPCR4-2, where aminomethylbenzoic acid (AMBS) is merely a structural linker component, not the subject drug. |
| popPK | Ho_2011 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of the radiolabeled peptide 111In-AMBA, not the drug aminomethylbenzoic acid. |
| popPK | Hu_2004 | irrelevant | 0 | 0 | The paper describes the synthesis and structure-activity relationship (SAR) of BACE1 inhibitors, where aminomethylbenzoic acid is a structural component, not a subject of pharmacokinetic study. |
| PD | Hu_2004 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for BACE1 inhibitors, which is a pharmacological potency assay, not a pharmacodynamic (exposure-response) or dose-response relationship in a biological system with PD parameters. |
| popPK | Kazuta_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of radiolabeled PSMA-targeting ligands where aminomethylbenzoic acid is merely a structural linker component, not the subject drug. |
| popPK | Kazuta_2025 | irrelevant | 0 | 0 | The paper focuses on PSMA-targeting radioligands where aminomethylbenzoic acid is a structural linker component, not the subject drug for PK parameter extraction. |
| popPK | Linder_2009 | irrelevant | 0 | 0 | The study focuses on the radiotherapeutic compound Lu-AMBA (a peptide conjugate), not the small molecule drug aminomethylbenzoic acid, and does not report PK parameters for the target drug. |
| popPK | Liu_2010 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of the radiolabeled peptide 177Lu-AMBA, not the drug aminomethylbenzoic acid. |
| popPK | Lymperis_2019 | irrelevant | 0 | 0 | The study focuses on radiolabeled peptides (111In-SB9 and 111In-AMBA) for imaging, not the pharmacokinetics of the drug aminomethylbenzoic acid. |
| popPK | Mendes_2017 | irrelevant | 0 | 0 | The paper studies the environmental fate of the herbicide mesotrione and its metabolite AMBA (2-amino-4-methylsulfonyl benzoic acid), not the drug aminomethylbenzoic acid, and contains no pharmacokinetic parameters. |
| popPK | Nigam_1993 | irrelevant | 0 | 0 | The paper describes in vitro enzyme inhibition of p21ras farnesyltransferase by peptidomimetics containing aminomethylbenzoic acid, not the pharmacokinetics of aminomethylbenzoic acid itself. |
| popPK | Qian_1994 | irrelevant | 0 | 0 | The paper describes the design of peptidomimetic inhibitors for p21ras farnesyltransferase where aminomethylbenzoic acid is a structural spacer, not a drug subject to pharmacokinetic analysis. |
| PD | Qian_1994 | not_relevant | 3 | 5 | The paper reports IC50 values for specific peptidomimetic inhibitors (including AMBA derivatives) in an enzyme assay, but it is a structure-activity relationship (SAR) study, not a pharmacodynamic exposure-response or dose-response analysis for the drug aminomethylbenzoic acid itself. |
| popPK | Schroeder_2010 | irrelevant | 0 | 0 | The paper studies radiolabeled bombesin analogues for prostate cancer imaging and does not mention aminomethylbenzoic acid or report its pharmacokinetic parameters. |
| popPK | Trencsényi_2023 | irrelevant | 0 | 0 | The paper is a review of Scandium-44 radiopharmaceuticals for PET imaging and does not report pharmacokinetic parameters for aminomethylbenzoic acid. |
| popPK | Verstraete_1985 | irrelevant | 0 | 0 | The paper is a review of fibrinolysis inhibitors that mentions p-aminomethylbenzoic acid only as a comparator for potency and general absorption/excretion, without providing specific quantitative PK parameters (CL, V, ka) for it. |
| popPK | Wang_2025 | irrelevant | 0 | 0 | The paper studies radiolabeled bombesin derivatives and uses [177Lu]Lu-AMBA (a radiopharmaceutical) as a comparator, not the small molecule drug aminomethylbenzoic acid. |
| popPK | Wild_2011 | irrelevant | 0 | 0 | The study focuses on radiopeptide therapy and biodistribution/dosimetry, not the pharmacokinetic parameters of aminomethylbenzoic acid. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
