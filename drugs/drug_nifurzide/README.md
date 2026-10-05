<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07A&quot;,&quot;href&quot;:&quot;atc/A07A.md&quot;},{&quot;label&quot;:&quot;nifurzide&quot;}]"></div>

# nifurzide

- **generic name:** nifurzide
- **ATC codes:** `A07AX04`
- **DrugBank:** [DB13325](https://go.drugbank.com/drugs/DB13325) · **PubChem:** not captured
- **molar mass:** 336.28 g/mol (C12H8N4O6S) — DrugBank
- **groups:** experimental

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 18:20 | 1:56 | 0/0/0 | 0/0/0 | 0/0/0 | 62,257/2,087 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 5/2 | 6/1 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 1 matched, 35 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Basly_1998 | irrelevant | 0 | 0 | The study focuses on electron spin resonance dosimetry of irradiated nitrofurans, not on the pharmacokinetic disposition parameters of nifurzide. |
| PD | Basly_1998 | not_relevant | 0 | 0 | The paper describes ESR dosimetry for radiosterilization (radiation dose vs. radical formation), not pharmacodynamic exposure-response or dose-response relationships for drug efficacy. |
| popPK | Chung_2019 | irrelevant | 0 | 0 | The paper discusses nitrofurantoin, not nifurzide, and is a clinical safety/efficacy study rather than a PK parameter study. |
| popPK | Darfeuille-Michaud_1989 | irrelevant | 0 | 0 | The study investigates the in-vitro inhibition of bacterial adhesion by nifurzide and does not report any pharmacokinetic parameters. |
| popPK | Delsarte_1981 | irrelevant | 0 | 0 | The study is an in-vitro microbiological investigation of nifurzide's mechanism of action on E. coli, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Diezi_2014 | irrelevant | 0 | 0 | The paper is a pharmacovigilance review of various drugs (nitrofurantoin, dabigatran, etc.) and does not mention nifurzide or provide any pharmacokinetic parameters. |
| popPK | Gavinet_1987 | irrelevant | 0 | 0 | The study reports in-vitro antimicrobial sensitivity (MIC) data, not pharmacokinetic parameters. |
| popPK | Guelen_1988 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of nitrofurantoin, not nifurzide. |
| popPK | Hu_1993 | irrelevant | 0 | 0 | The study is a clinical trial of ranitidine and antibiotics for duodenal ulcers and does not involve nifurzide or report any pharmacokinetic parameters. |
| popPK | Huang_2012 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of nitrofurantoin, sulfasalazine, and compound A in rats, and does not mention or test nifurzide. |
| popPK | Ingalsbe_2015 | irrelevant | 0 | 0 | The study focuses on the clinical efficacy and safety of nitrofurantoin, not nifurzide, and does not report pharmacokinetic parameters for nifurzide. |
| popPK | Labaune_1986 | irrelevant | 2 | 0 | The study reports qualitative disposition and excretion percentages (mass balance) but lacks quantitative compartmental PK parameters (CL, V, t1/2) for nifurzide. |
| popPK | Leonard_1985 | irrelevant | 0 | 0 | The study investigates the in vivo antibacterial activity of nifurzide on intestinal flora, not its pharmacokinetic disposition parameters. |
| popPK | Liedtke_1980 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of nitrofurantoin, not nifurzide. |
| popPK | Melikian_1972 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of indocyanine green, not nifurzide, and nifurzide is not mentioned. |
| popPK | Michel-Briand_1982 | irrelevant | 0 | 0 | no_text gate: only 358 chars of text extracted (&lt; 400) |
| popPK | Michel-Briand_1985 | irrelevant | 0 | 0 | The study investigates the mechanism of action (plasmid transfer inhibition) of nifurzide in bacteria, not its pharmacokinetic disposition parameters. |
| popPK | Michel-Briand_1986 | irrelevant | 0 | 0 | The paper is a microbiology study on plasmid elimination in bacteria, not a pharmacokinetic study of nifurzide. |
| popPK | Michel-Briand_1987 | irrelevant | 0 | 0 | The paper is a microbiological study on antibiotic effects on bacterial plasmids, not a pharmacokinetic study of nifurzide. |
| popPK | Newton_2020 | irrelevant | 0 | 0 | The paper is an epidemiological study on Salmonella Infantis in poultry farms and contains no pharmacokinetic data for nifurzide. |
| popPK | Nogueira_2013 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of nitrofurazone and its prodrug hydroxymethylnitrofurazone, not nifurzide. |
| popPK | Nouws_1987 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of furaltadone and nitrofurazone, not nifurzide. |
| popPK | Pons_1990 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of nitrofurantoin, not nifurzide. |
| popPK | Robinson_2020 | irrelevant | 0 | 0 | The study evaluates antibiotic prescribing patterns for cystitis and does not involve nifurzide or pharmacokinetic modeling. |
| popPK | Santos_2016 | irrelevant | 0 | 0 | The study evaluates the safety and efficacy of nitrofurantoin (a different drug) in humans and does not report pharmacokinetic parameters for nifurzide. |
| popPK | Sasaki_1994 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding nifurzide pharmacokinetics. |
| popPK | Seyyedmajidi_2011 | irrelevant | 0 | 0 | The study is a clinical trial for H. pylori eradication and does not report pharmacokinetic parameters for nifurzide. |
| popPK | Sharma_2023 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of nitrofurantoin, not nifurzide. |
| popPK | Statham_1985 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of nitrofurantoin, not nifurzide. |
| popPK | Sullivan_1975 | irrelevant | 0 | 0 | The study investigates nitrofurantoin, sulfamethizole, and cephalexin, not nifurzide. |
| popPK | Vore_2008 | irrelevant | 0 | 0 | The paper discusses progesterone regulation of BCRP expression and does not mention nifurzide or report any pharmacokinetic parameters for it. |
| popPK | Wang_2008 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of 7,8-benzoflavone, not nifurzide. |
| popPK | Watari_1985 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of nitrofurantoin, not nifurzide. |
| popPK | Yang_2022 | irrelevant | 0 | 0 | The study focuses on antimicrobial susceptibility (MIC/MPC) of Klebsiella pneumoniae to eight antibiotics, none of which is nifurzide, and does not report pharmacokinetic parameters for nifurzide. |
| popPK | Yang_2024 | irrelevant | 0 | 0 | The study investigates the antibacterial and anti-virulence effects of furazolidone in a mouse infection model, not the pharmacokinetics of nifurzide. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
