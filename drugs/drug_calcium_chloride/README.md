<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A12A&quot;,&quot;href&quot;:&quot;atc/A12A.md&quot;},{&quot;label&quot;:&quot;calcium chloride&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;CalciumChloride_Ansari2022_reference&quot;,&quot;label&quot;:&quot;Ansari_2022_reference&quot;,&quot;href&quot;:&quot;drugs/drug_calcium_chloride/CalciumChloride_Ansari2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;CalciumChloride_Ansari2025_reference&quot;,&quot;label&quot;:&quot;Ansari_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_calcium_chloride/CalciumChloride_Ansari2025_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# calcium chloride

- **generic name:** calcium chloride
- **ATC codes:** `A12AA07`, `B05XA07`, `G04BA03`
- **DrugBank:** [DB01164](https://go.drugbank.com/drugs/DB01164) · **PubChem:** [CID 5284359](https://pubchem.ncbi.nlm.nih.gov/compound/5284359)
- **molar mass:** 110.984 g/mol (CaCl2) — DrugBank
- **groups:** approved, investigational

## About

**Description.** Calcium chloride is an ionic compound of calcium and chlorine. It is highly soluble in water and it is deliquescent. It is a salt that is solid at room temperature, and it behaves as a typical ionic halide. It has several common applications such as brine for refrigeration plants, ice and dust control on roads, and in cement. It can be produced directly from limestone, but large amounts are also produced as a by-product of the Solvay process. Because of its hygroscopic nature, it must be kept in tightly-sealed containers.

**Indication.** For the treatment of hypocalcemia in those conditions requiring a prompt increase in blood plasma calcium levels, for the treatment of magnesium intoxication due to overdosage of magnesium sulfate, and used to combat the deleterious effects of hyperkalemia as measured by electrocardiographic (ECG), pending correction of the increased potassium level in the extracellular fluid.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-26 11:30 | 9:29 | 1/1/0 | 0/0/0 | 0/0/0 | 80,987/10,364 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 1/4 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.833). The first reading is what the record holds.">cross-check: disputed</span> | [Ansari_2022_reference](drugs/drug_calcium_chloride/CalciumChloride_Ansari2022_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Ansari JR et al., Calcium chloride for the prevention of…, Journal of clinical anesthe… (2022) | [10.1016/j.jclinane.2022.110796](https://doi.org/10.1016/j.jclinane.2022.110796) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.2). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Ansari_2025_reference](drugs/drug_calcium_chloride/CalciumChloride_Ansari2025_reference.md) | — | 2-compartment (no model) | 3 | Ansari JR et al., Bioequivalence and Pharmacokinetics of…, Anesthesiology (2025) | [10.1097/ALN.0000000000005248](https://doi.org/10.1097/ALN.0000000000005248) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=calcium_chloride) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | bile duct | <sub>“…Approximately 80% of body calcium is excreted in the feces as insoluble salts; urinary exc…”</sub> | prose |
| metabolism | kidney | <sub>“…f body calcium is excreted in the feces as insoluble salts; urinary excretion accounts for…”</sub> | prose |
| excretion | bile duct | <sub>“…Approximately 80% of body calcium is excreted in the feces as insoluble salts; urinary exc…”</sub> | prose |
| excretion | kidney | <sub>“…f body calcium is excreted in the feces as insoluble salts; urinary excretion accounts for…”</sub> | prose |

<sub>Actors without a tissue in the table: S100A13 (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 48 matched, 23 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ansari_2022.pdf` | Ansari JR et al., Calcium chloride for the prevention of…, Journal of clinical anesthe… (2022) | popPK | 10 | [10.1016/j.jclinane.2022.110796](https://doi.org/10.1016/j.jclinane.2022.110796) | [35447502](https://pubmed.ncbi.nlm.nih.gov/35447502) | The study reports quantitative population pharmacokinetic parameters (clearance and volume of distribution) for calcium chloride directly in the text. |
| `Ansari_2025.pdf` | Ansari JR et al., Bioequivalence and Pharmacokinetics of…, Anesthesiology (2025) | popPK | 10 | [10.1097/ALN.0000000000005248](https://doi.org/10.1097/ALN.0000000000005248) | [39361822](https://pubmed.ncbi.nlm.nih.gov/39361822) | The paper reports a population pharmacokinetic model for calcium chloride with explicit numeric values for clearance, volume, and half-life in the text. |

<sub>queue written 2026-09-26T11:26:30.185239+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aldawsari_2021 | irrelevant | 0 | 0 | The study focuses on the formulation of apigenin beads where calcium chloride is used only as a crosslinking agent, not as the subject drug for pharmacokinetic analysis. |
| PD | Aldawsari_2021 | not_relevant | 0 | 0 | The paper focuses on the formulation of apigenin beads where calcium chloride is used only as a crosslinking agent, and no pharmacodynamic or exposure-response relationship for calcium chloride is reported. |
| popPK | Ali_2011 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of a plant extract where calcium chloride is used as a reagent to induce contractions, not as the subject drug for pharmacokinetic analysis. |
| popPK | Ali_2012 | irrelevant | 0 | 0 | The paper investigates the pharmacological effects of a plant extract using calcium chloride as a reagent for dose-response curves, not as a subject drug for pharmacokinetic analysis. |
| popPK | Benny_2022 | irrelevant | 0 | 0 | The paper is a microbiology study on Agrobacterium transformation where calcium chloride is used as a reagent for cell competency, not as a subject drug for pharmacokinetic analysis. |
| PD | Benny_2022 | not_relevant | 0 | 0 | The paper reports a dose-response relationship for silver nanoparticles (AgNPs) on Agrobacterium, not for calcium chloride; calcium chloride is used as a standard reagent in the transformation protocol, and no PD parameters are derived for it. |
| PGx | Bodnár_2025 | not_relevant | 0 | 0 | The paper focuses on the formulation of an ABCG2 inhibitor using calcium chloride as a crosslinking agent, not on the pharmacokinetics or pharmacodynamics of calcium chloride itself, and does not report any pharmacogenomic effects. |
| popPK | Carrillo-López_2010 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calcium-sensing receptor activation by lanthanum, not a pharmacokinetic study of calcium chloride. |
| PGx | Ciriello_2022 | not_relevant | 0 | 0 | The paper studies the effect of calcium chloride on basil plant growth and metabolism, not human pharmacokinetics or pharmacodynamics. |
| PGx | Colosi_2014 | not_relevant | 0 | 0 | The paper describes the fabrication of tissue engineering scaffolds using calcium chloride as a cross-linking agent, not the pharmacokinetics or pharmacodynamics of calcium chloride as a drug in relation to genetic variants. |
| PGx | Gress_2016 | not_relevant | 0 | 0 | The paper studies the protective effects of a plant extract (Dig1) against Roundup toxicity in rats and does not involve calcium_chloride or any pharmacogenomic analysis. |
| popPK | Hill_2007 | irrelevant | 0 | 0 | The study investigates the diffusion and mineralization of calcium chloride in hydrogels (in-vitro/materials science), not the pharmacokinetics of the drug in a biological system. |
| popPK | Liu_2013 | irrelevant | 0 | 0 | The paper describes the fabrication of microfluidic particles using calcium chloride as a cross-linking agent, not a pharmacokinetic study of the drug. |
| popPK | Menon_1986 | irrelevant | 0 | 0 | The paper is a cytochemical study on epidermal enzymes where calcium chloride is used only as a buffer component, not as a subject drug for pharmacokinetic analysis. |
| PGx | Morrow_1986 | not_relevant | 0 | 0 | The paper investigates the effect of calcium chloride on ethanol sensitivity in genetically distinct mouse lines, rather than how a gene variant alters the pharmacokinetics or pharmacodynamics of calcium chloride itself. |
| popPK | Noguchi_2024 | irrelevant | 0 | 0 | The study investigates the pharmacological effects of piperine and piperlongumine on coronary artery contraction, using calcium chloride only as a reagent to induce contraction, not as the subject drug for pharmacokinetic analysis. |
| popPK | Pantan_2014 | irrelevant | 0 | 0 | The study investigates the vasorelaxant effects of 16-O-acetyldihydroisosteviol, using calcium chloride only as a tool to induce contraction, and contains no pharmacokinetic parameters. |
| PD | Pantan_2014 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of 16-O-acetyldihydroisosteviol (ADIS), not calcium chloride; calcium chloride is used only as a tool compound to induce contraction. |
| popPK | Sharon_2021 | irrelevant | 0 | 0 | The study focuses on the in-vitro release and cytotoxicity of topotecan from PLGA spheres where calcium chloride is a co-loaded excipient, not a pharmacokinetic study of calcium chloride. |
| popPK | Song_2026 | irrelevant | 0 | 0 | The paper is an ecotoxicology study on aquatic plants and does not report pharmacokinetic parameters for calcium chloride. |
| popPK | Thomas_2018 | irrelevant | 0 | 0 | The paper describes the synthesis of calcium alginate microspheres using calcium chloride as a crosslinking agent, not a pharmacokinetic study of calcium chloride as a drug. |
| popPK | Turnbull_2014 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic investigation of engineered cardiac tissues, not a pharmacokinetic study, and calcium chloride is used as a pharmacological agent rather than the subject of PK analysis. |
| PGx | Yang_2022 | not_relevant | 0 | 0 | The paper studies the effect of Gukang Capsules on CYP450 enzymes, not the effect of a gene variant on the PK/PD of calcium chloride. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-26 11:26 UTC</sub>
