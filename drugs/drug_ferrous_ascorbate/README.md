<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B03A&quot;,&quot;href&quot;:&quot;atc/B03A.md&quot;},{&quot;label&quot;:&quot;ferrous ascorbate&quot;}]"></div>

# ferrous ascorbate

- **generic name:** ferrous ascorbate
- **ATC codes:** `B03AA10`
- **DrugBank:** [DB14490](https://go.drugbank.com/drugs/DB14490) · **PubChem:** [CID 54710214](https://pubchem.ncbi.nlm.nih.gov/compound/54710214)
- **molar mass:** 406.077 g/mol (C12H14FeO12) — DrugBank
- **groups:** approved, withdrawn

## About

Ferrous ascorbate is an oral bivalent iron preparation that was used as an antianemic medicine to treat iron deficiency anaemia. It is no longer in use, as it has been withdrawn.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27276404](https://www.wikidata.org/wiki/Q27276404) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 20:01 | 0:17 | 0/0/0 | 0/0/0 | 0/0/0 | 6,478/430 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 0/1 | 4/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ferrous_ascorbate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: AHSP (unknown), CP (unknown), EGLN1 (unknown), FEN1 (unknown), FTH1 (unknown), FXN (unknown), HBA1 (unknown), HDAC8 (unknown), NEIL1 (unknown), NEIL2 (unknown), POLB (unknown), TF (unknown), TFRC (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Boccio_1996 | irrelevant | 1 | 0 | The study reports iron bioavailability percentages (absorption fraction) for ferrous ascorbate as a reference standard, but does not provide pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Boccio_1998 | irrelevant | 2 | 1 | The study focuses on microencapsulated ferrous sulfate (SFE-171) with ferrous ascorbate serving only as a reference standard, and it reports only a single bioavailability percentage without compartmental PK parameters (CL, V, ka). |
| popPK | Calvo_1989 | irrelevant | 0 | 0 | The study measures iron bioavailability (absorption percentage) using ferrous ascorbate as a reference standard, not pharmacokinetic disposition parameters (CL, V, t1/2) for ferrous ascorbate itself. |
| popPK | Chrysselis_2000 | irrelevant | 0 | 0 | The paper studies morpholine derivatives for antioxidant and hypocholesterolemic activity, using ferrous/ascorbate only as a reagent for in-vitro lipid peroxidation assays, not as a subject drug for PK analysis. |
| PD | Chrysselis_2000 | not_relevant | 3 | 2 | The paper reports an IC50 for a chemical antioxidant assay and a single-dose effect in rats, but does not report a pharmacodynamic model or exposure-response relationship for ferrous ascorbate. |
| popPK | Dalvi_2025 | irrelevant | 0 | 0 | The paper is a clinical outcome study reporting hemoglobin changes, not a pharmacokinetic study, and contains no PK parameters for ferrous ascorbate. |
| popPK | Gheith_2018 | irrelevant | 0 | 0 | The study is a pharmacological/toxicology investigation of a plant extract in an anemia model, where ferrous ascorbate is used only as a standard comparator, and no pharmacokinetic parameters are reported. |
| PD | Gheith_2018 | not_relevant | 0 | 0 | The paper studies the pharmacological effects of Beta vulgaris extract, using ferrous ascorbate only as a positive control group without analyzing its specific exposure-response or dose-response relationship. |
| popPK | Johnson_1990 | irrelevant | 2 | 0 | The study focuses on comparative bioavailability and mechanistic absorption pathways in rats rather than reporting quantitative population pharmacokinetic parameters (CL, V, ka) for ferrous ascorbate. |
| popPK | Kaltwasser_1989 | irrelevant | 2 | 0 | The study reports relative bioavailability and therapeutic efficacy (hemoglobin rise) rather than quantitative pharmacokinetic disposition parameters (CL, V, ka) for ferrous ascorbate. |
| popPK | Kumar_2023 | irrelevant | 0 | 0 | The study is a nutritional intervention trial in rats where ferrous ascorbate is used only as a reference for bioavailability, with no pharmacokinetic parameters reported. |
| PGx | Munkres_1979 | not_relevant | 0 | 0 | The paper studies the mutagenicity of ferrous ions and ascorbic acid in Neurospora crassa, not the pharmacokinetics or pharmacodynamics of ferrous_ascorbate in humans or the influence of genetic variants on these parameters. |
| popPK | Olivares_1997 | irrelevant | 1 | 0 | The study focuses on the bioavailability of iron bis-glycine chelate, using ferrous ascorbate only as a reference/comparator agent, and does not report pharmacokinetic parameters (CL, V, ka) for ferrous ascorbate. |
| popPK | Olivares_2001 | irrelevant | 1 | 0 | The study reports iron absorption percentages (bioavailability) rather than pharmacokinetic disposition parameters (CL, V, ka) for ferrous ascorbate, which serves only as a reference comparator. |
| popPK | Pizarro_1998 | irrelevant | 1 | 0 | The study measures iron absorption percentage (bioavailability) rather than pharmacokinetic disposition parameters like clearance, volume, or half-life. |
| popPK | Pizarro_2013 | irrelevant | 0 | 0 | The study investigates the bioavailability of ferrous gluconate with glycine, using ferrous ascorbate only as a reference comparator, and does not report pharmacokinetic parameters for ferrous ascorbate. |
| popPK | Rangaraj_2025 | irrelevant | 0 | 0 | The study is a clinical trial comparing efficacy and tolerability of iron formulations, reporting hemoglobin and iron indices rather than pharmacokinetic parameters like clearance or volume. |
| popPK | Rao_1977 | irrelevant | 0 | 0 | The study measures iron absorption/retention percentages using radioactive tracers, not pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Serfass_2003 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of iron bioavailability using Caco-2 cells and does not report pharmacokinetic parameters for ferrous ascorbate. |
| popPK | Shertzer_1988 | irrelevant | 0 | 0 | The paper studies the antioxidant effects of indole-3-carbinol, using ferrous/ascorbate only as a chemical initiator for lipid peroxidation in an in-vitro system, not as a subject drug for pharmacokinetic analysis. |
| PD | Shertzer_1988 | not_relevant | 0 | 0 | The paper studies indole-3-carbinol, not ferrous ascorbate; ferrous ascorbate is only used as a chemical initiator of lipid peroxidation in an in vitro system. |
| popPK | Suva_2024 | irrelevant | 0 | 0 | The study is a clinical trial comparing hematological outcomes (hemoglobin levels) of different iron salts and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for ferrous ascorbate. |
| popPK | Tooulia_2015 | irrelevant | 0 | 0 | The paper studies thiomorpholine derivatives as antioxidants and hypolipidemic agents, using ferrous/ascorbate only as a reagent system for in-vitro lipid peroxidation assays, not as a subject drug for PK analysis. |
| popPK | Trivedi_2025 | irrelevant | 2 | 0 | The study reports qualitative in vivo changes in serum iron levels and in vitro release profiles, but does not provide quantitative pharmacokinetic parameters (e.g., CL, V, ka) for ferrous ascorbate. |
| popPK | Valenzuela_2013 | irrelevant | 0 | 0 | The study reports iron absorption percentages (bioavailability) rather than pharmacokinetic disposition parameters (CL, V, ka) for ferrous ascorbate. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
