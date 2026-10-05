<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A12A&quot;,&quot;href&quot;:&quot;atc/A12A.md&quot;},{&quot;label&quot;:&quot;calcium chloride&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;CalciumChloride_Ansari2022_reference&quot;,&quot;label&quot;:&quot;Ansari_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_calcium_chloride/CalciumChloride_Ansari2022_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# calcium chloride

- **generic name:** calcium chloride
- **ATC codes:** `A12AA07`, `B05XA07`, `G04BA03`
- **DrugBank:** [DB01164](https://go.drugbank.com/drugs/DB01164) · **PubChem:** [CID 5284359](https://pubchem.ncbi.nlm.nih.gov/compound/5284359)
- **molar mass:** 110.984 g/mol (CaCl2) — DrugBank
- **groups:** approved, investigational

## About

Calcium chloride is a calcium salt used to treat conditions such as cardiac arrest and tetany, and as a calcium supplement or electrolyte additive. It is an approved medicine, used mainly in hospital settings for intravenous electrolyte replacement and emergency care.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q208451](https://www.wikidata.org/wiki/Q208451) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| calcium | metabolite | 40.078 | Ca | PubChem | [5460341](https://pubchem.ncbi.nlm.nih.gov/compound/5460341) | Ansari_2022 |
| calcium_chloride | metabolite | 110.984 | CaCl2 | DrugBank | [5284359](https://pubchem.ncbi.nlm.nih.gov/compound/5284359) | Ansari_2022, Ansari_2025 |
| ionized calcium | metabolite | 40.078 | Ca+2 | PubChem | [271](https://pubchem.ncbi.nlm.nih.gov/compound/271) | Ansari_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 08:38 | 4:49 | 1/1/0 | 1/0/0 | 0/0/0 | 100,973/10,825 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 1/4 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Ansari_2022_reference](drugs/drug_calcium_chloride/CalciumChloride_Ansari2022_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Ansari JR et al., Calcium chloride for the prevention of…, Journal of clinical anesthe… (2022) | [10.1016/j.jclinane.2022.110796](https://doi.org/10.1016/j.jclinane.2022.110796) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Ansari_2025_reference](drugs/drug_calcium_chloride/CalciumChloride_Ansari2025_reference.md) | — | 2-compartment (no model) | 3 | Ansari JR et al., Bioequivalence and Pharmacokinetics of…, Anesthesiology (2025) | [10.1097/ALN.0000000000005248](https://doi.org/10.1097/ALN.0000000000005248) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Turnbull_2014_twitch_stress](drugs/drug_calcium_chloride/pd_Turnbull_2014_twitch_stress.md) | twitch stress ← calcium chloride · direct Emax (saturable) effect | — | Turnbull IC et al., Advancing functional engineered cardiac…, FASEB journal : official pu… (2014) | [10.1096/fj.13-228007](https://doi.org/10.1096/fj.13-228007) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=calcium_chloride) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: S100A13 (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 48 matched, 23 returned
- **screened:** 4  ·  **relevant:** 2
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ansari_2022.pdf` | Ansari JR et al., Calcium chloride for the prevention of…, Journal of clinical anesthe… (2022) | popPK | 10 | [10.1016/j.jclinane.2022.110796](https://doi.org/10.1016/j.jclinane.2022.110796) | [35447502](https://pubmed.ncbi.nlm.nih.gov/35447502) | The study reports quantitative population pharmacokinetic parameters (clearance and volume of distribution) for calcium chloride in humans. |
| `Ansari_2025.pdf` | Ansari JR et al., Bioequivalence and Pharmacokinetics of…, Anesthesiology (2025) | popPK | 10 | [10.1097/ALN.0000000000005248](https://doi.org/10.1097/ALN.0000000000005248) | [39361822](https://pubmed.ncbi.nlm.nih.gov/39361822) | The study reports a population pharmacokinetic model for calcium chloride with specific numeric values for clearance, volume, and half-life in the text. |

<sub>queue written 2026-10-05T08:34:40.082009+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aldawsari_2021 | irrelevant | 0 | 0 | The study focuses on the formulation of apigenin beads where calcium chloride is used only as a crosslinking agent, not as the subject drug for pharmacokinetic analysis. |
| PD | Aldawsari_2021 | not_relevant | 0 | 0 | The paper focuses on the formulation of apigenin beads where calcium chloride is used only as a crosslinking agent, and no pharmacodynamic or exposure-response relationship for calcium chloride is reported. |
| popPK | Ali_2011 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of a plant extract's antispasmodic effects, using calcium chloride only as a tool to induce contractions, not as a subject drug for PK analysis. |
| popPK | Ali_2012 | irrelevant | 0 | 0 | The study investigates the pharmacological effects of a plant extract on worms and rabbit jejunum, using calcium chloride only as a reagent for concentration-response curves, not as a subject drug for PK analysis. |
| popPK | Benny_2022 | irrelevant | 0 | 0 | The paper describes a method for bacterial transformation using calcium chloride as a reagent, not a pharmacokinetic study of calcium chloride as a drug. |
| PD | Benny_2022 | not_relevant | 0 | 0 | The paper reports a dose-response relationship for silver nanoparticles (AgNPs) on Agrobacterium, not for calcium chloride; calcium chloride is used as a standard reagent in the transformation protocol, and no PD parameters are derived for it. |
| PGx | Bodnár_2025 | not_relevant | 0 | 0 | The paper focuses on the formulation of an ABCG2 inhibitor using alginate microcapsules and does not report pharmacogenomic effects on the PK/PD of calcium chloride. |
| popPK | Carrillo-López_2010 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of lanthanum's effect on the calcium-sensing receptor, not a pharmacokinetic study of calcium chloride. |
| PGx | Ciriello_2022 | not_relevant | 0 | 0 | The paper studies the effect of calcium chloride on basil plant growth and metabolism, not human pharmacokinetics or pharmacodynamics. |
| PGx | Colosi_2014 | not_relevant | 0 | 0 | The paper describes the fabrication of tissue engineering scaffolds using calcium chloride as a cross-linking agent, not the pharmacokinetics or pharmacodynamics of calcium chloride as a drug in relation to genetic variants. |
| PGx | Gress_2016 | not_relevant | 0 | 0 | The paper investigates the protective effects of a plant extract (Dig1) against Roundup toxicity in rats and does not report any pharmacogenomic effects on the PK/PD of calcium_chloride. |
| popPK | Hill_2007 | irrelevant | 0 | 0 | The study investigates the diffusion and mineralization of calcium chloride in hydrogels (in vitro materials science), not the pharmacokinetics of the drug in a biological system. |
| popPK | Liu_2013 | irrelevant | 0 | 0 | The paper describes the fabrication of microfluidic particles using calcium chloride as a cross-linking agent, not a pharmacokinetic study of calcium chloride. |
| popPK | Menon_1986 | irrelevant | 0 | 0 | The paper is a cytochemical study on enzyme localization in epidermis where calcium chloride is used only as a buffer component, not as a subject drug for PK analysis. |
| PGx | Morrow_1986 | not_relevant | 0 | 0 | The paper investigates the effect of calcium chloride on ethanol sensitivity in mice, not the effect of a gene variant on the pharmacokinetics or pharmacodynamics of calcium chloride itself. |
| popPK | Noguchi_2024 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of piperine and piperlongumine on porcine coronary arteries, using calcium chloride only as a reagent to induce contraction, not as the subject drug for pharmacokinetic analysis. |
| popPK | Pantan_2014 | irrelevant | 0 | 0 | The study investigates the vasorelaxant effects of 16-O-acetyldihydroisosteviol in rat aorta, using calcium chloride only as a tool to induce contraction, not as the subject drug for pharmacokinetic analysis. |
| PD | Pantan_2014 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of 16-O-acetyldihydroisosteviol (ADIS), not calcium chloride; calcium chloride is used only as a tool compound to induce contraction. |
| popPK | Sharon_2021 | irrelevant | 0 | 0 | The study is an in-vitro formulation and cytotoxicity study of topotecan co-loaded with calcium chloride, not a pharmacokinetic study of calcium chloride. |
| popPK | Song_2026 | irrelevant | 0 | 0 | The study is an ecotoxicology assessment of deicers on aquatic plants, not a pharmacokinetic study of calcium chloride in an animal or human subject. |
| popPK | Thomas_2018 | irrelevant | 0 | 0 | The paper describes the use of calcium chloride as a crosslinking agent for alginate microspheres, not as a drug subject to pharmacokinetic analysis. |
| popPK | Turnbull_2014 | irrelevant | 0 | 0 | The study is an in vitro functional biology paper using calcium chloride as a pharmacological agent to assess dose-response (EC50), not a pharmacokinetic study reporting disposition parameters. |
| PGx | Yang_2022 | not_relevant | 0 | 0 | The paper studies the effect of Gukang Capsules on CYP450 enzymes, not the effect of a gene variant on the PK/PD of calcium chloride. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-05 08:34 UTC</sub>
