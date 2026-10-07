<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D06B&quot;,&quot;href&quot;:&quot;atc/D06B.md&quot;},{&quot;label&quot;:&quot;aciclovir&quot;}]"></div>

# aciclovir

- **generic name:** aciclovir
- **ATC codes:** `D06BB03`, `J05AB01`, `S01AD03`
- **DrugBank:** [DB00787](https://go.drugbank.com/drugs/DB00787) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Aciclovir is an antiviral drug used to treat infections such as chickenpox, shingles, herpes simplex including genital herpes, and related viral conditions. It is widely used and appears on the WHO list of essential medicines, available as topical, eye, and systemic antiviral preparations.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q147101](https://www.wikidata.org/wiki/Q147101) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| aciclovir (acyclovir) | parent | 225.208 | C8H11N5O3 | PubChem | [135398513](https://pubchem.ncbi.nlm.nih.gov/compound/135398513) | DAgate_2024, Laskin_1982, Maximova_2022, Sampson_2014 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:05 | 4:04 | 0/3/2 | 0/0/0 | 0/0/0 | 347,164/27,766 | einfracz / qwen3.8-27b | 6 | 1/5 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [DAgate_2024_reference](drugs/drug_aciclovir/Aciclovir_DAgate2024_reference.md) | — | 1-compartment (no model) | 1 (+2 cov.) | D'Agate S et al., Population pharmacokinetics and dose ra…, Pharmacology research & per… (2024) | [10.1002/prp2.1193](https://doi.org/10.1002/prp2.1193) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q88 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Maximova_2022_reference](drugs/drug_aciclovir/Aciclovir_Maximova2022_reference.md) | — | 1-compartment (no model) | 5 (+1 cov.) | Maximova N et al., Population Pharmacokinetics of Intraven…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.865871](https://doi.org/10.3389/fphar.2022.865871) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Laskin_1982_reference](drugs/drug_aciclovir/Aciclovir_Laskin1982_reference.md) | — | 1-compartment (no model) | 4 | Laskin OL et al., Effects of probenecid on the pharmacoki…, Antimicrobial agents and ch… (1982) | [10.1128/AAC.21.5.804](https://doi.org/10.1128/AAC.21.5.804) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Sampson_2014_reference](drugs/drug_aciclovir/Aciclovir_Sampson2014_reference.md) | — | 1-compartment (no model) | 0 | Sampson MR et al., Population pharmacokinetics of intraven…, The Pediatric infectious di… (2014) | [10.1097/01.inf.0000435509.75114.3d](https://doi.org/10.1097/01.inf.0000435509.75114.3d) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [de_1981_reference](drugs/drug_aciclovir/Aciclovir_de1981_reference.md) | — | 1-compartment (no model) | 0 | de Miranda P et al., Disposition of intravenous radioactive…, Clinical pharmacology and t… (1981) | [10.1038/clpt.1981.218](https://doi.org/10.1038/clpt.1981.218) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=aciclovir) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | ileum | `SLC10A2` substrate | DrugBank actor |
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | liver | `SLC22A1` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A6` inhibitor/substrate, `SLC22A8` inhibitor/substrate, `SLC47A1` substrate, `SLC47A2` substrate | DrugBank actor |
| excretion | liver | `SLC47A1` substrate | DrugBank actor |
| excretion | lung | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ADSS1 (substrate), CKB (substrate), GUK1 (substrate), NME1 (substrate), PCK2 (substrate), PGK1 (substrate), PKLR (substrate), SUCLA2 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 173 matched, 20 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 5  ·  extracted 0  ·  needs_review 2  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Krasny_1981.pdf` | Krasny HC et al., Pharmacokinetics and bioavailability of…, The Journal of pharmacology… (1981) | popPK | 10 | not captured | [7463350](https://pubmed.ncbi.nlm.nih.gov/7463350) | The paper reports quantitative pharmacokinetic parameters (clearance, volume of distribution, half-life) for aciclovir in dogs, with specific numeric values provided in the abstract. |
| `Laskin_1982.pdf` | Laskin OL et al., Effects of probenecid on the pharmacoki…, Antimicrobial agents and ch… (1982) | popPK | 10 | [10.1128/AAC.21.5.804](https://doi.org/10.1128/AAC.21.5.804) | [7103460](https://pubmed.ncbi.nlm.nih.gov/7103460) | The study reports quantitative PK parameters (total clearance, renal clearance, AUC, half-life) for aciclovir in humans, with specific numeric values provided in the abstract. |
| `Sampson_2014.pdf` | Sampson MR et al., Population pharmacokinetics of intraven…, The Pediatric infectious di… (2014) | popPK | 10 | [10.1097/01.inf.0000435509.75114.3d](https://doi.org/10.1097/01.inf.0000435509.75114.3d) | [24346595](https://pubmed.ncbi.nlm.nih.gov/24346595) | The paper reports a quantitative population PK model for acyclovir (intravenous) in infants, including a specific clearance equation based on postmenstrual age. |
| `de_1981.pdf` | de Miranda P et al., Disposition of intravenous radioactive…, Clinical pharmacology and t… (1981) | popPK | 10 | [10.1038/clpt.1981.218](https://doi.org/10.1038/clpt.1981.218) | [7297024](https://pubmed.ncbi.nlm.nih.gov/7297024) | The study reports quantitative PK parameters (t1/2, CL) for aciclovir in humans, though some values are means/ranges from a small cohort. |
| `Faure-Bardon_2025.pdf` | Faure-Bardon V et al., Quantification of maternal and fetal va…, The Journal of antimicrobia… (2025) | popPK | 9 | [10.1093/jac/dkae470](https://doi.org/10.1093/jac/dkae470) | [39810739](https://pubmed.ncbi.nlm.nih.gov/39810739) | The study reports a population pharmacokinetic model for aciclovir (the active metabolite of valaciclovir) in humans, but the specific numeric parameter values (CL, V, etc.) are not listed in the provided text, only qualitative statements about median PK parameters (Cmin, Cmax, AUC) and simulation times. |
| `Kably_2025.pdf` | Kably B et al., Population pharmacokinetics of aciclovi…, The Journal of antimicrobia… (2025) | popPK | 9 | [10.1093/jac/dkaf070](https://doi.org/10.1093/jac/dkaf070) | [40155064](https://pubmed.ncbi.nlm.nih.gov/40155064) | The paper reports a population PK model for aciclovir, but the evidence provided only contains summary statistics (AUC, ratios) and lacks the specific model parameter estimates (CL, V, ka, Q) typically required for extraction. |

<sub>queue written 2026-10-07T22:02:14.759545+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Al-Salahi_2015 | irrelevant | 0 | 0 | The paper reports in-vitro antiviral activity (EC50) and molecular docking, not pharmacokinetic parameters for aciclovir. |
| popPK | Andreu_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of a new antiviral candidate (LN-7) in rats, while aciclovir is only mentioned as a comparator in in-vitro antiviral assays. |
| popPK | Babaev_2022 | irrelevant | 0 | 0 | The paper describes the synthesis and antiviral activity of new triterpenoids, using aciclovir only as a comparator standard with no pharmacokinetic data provided. |
| popPK | Chemaly_2019 | irrelevant | 0 | 0 | The paper is a systematic review of in vitro antiviral activity (EC50 values) and does not report pharmacokinetic disposition parameters (CL, V, ka, etc.) for aciclovir. |
| popPK | Civra_2025 | irrelevant | 0 | 0 | The study investigates antiviral activity and mechanisms of action of oxysterols against VZV, using aciclovir only as a comparator for synergy, with no pharmacokinetic data reported. |
| popPK | Faure-Bardon_2025 | relevant | 9 | 2 | The study reports a population pharmacokinetic model for aciclovir (the active metabolite of valaciclovir) in humans, but the specific numeric parameter values (CL, V, etc.) are not listed in the provided text, only qualitative statements about median PK parameters (Cmin, Cmax, AUC) and simulation times. |
| popPK | Gnann_1983 | irrelevant | 2 | 0 | The paper is a review describing the mechanism and clinical applications of aciclovir without reporting specific quantitative pharmacokinetic parameter values (CL, V, etc.) in the provided text. |
| popPK | Kably_2025 | relevant | 9 | 2 | The paper reports a population PK model for aciclovir, but the evidence provided only contains summary statistics (AUC, ratios) and lacks the specific model parameter estimates (CL, V, ka, Q) typically required for extraction. |
| popPK | Lietman_1982 | irrelevant | 2 | 4 | The paper is a review that provides qualitative and rounded descriptive values (e.g., Vss ~ 2/3 body weight, t1/2 ~ 3h) rather than a quantitative population-pharmacokinetic model or precise parameter estimates from original data. |
| popPK | Nugnes_2024 | irrelevant | 0 | 0 | The paper describes eco-genotoxicity in freshwater organisms, not a pharmacokinetic study. |
| popPK | Souza_2023 | irrelevant | 0 | 0 | The study focuses on new chloroquinolone derivatives, and aciclovir is only mentioned as a comparator for antiviral activity. |
| popPK | Viegas_2020 | irrelevant | 0 | 0 | This is an in-vitro antiviral activity study of triazole derivatives using aciclovir only as a comparator/reference drug, reporting no PK parameters. |
| popPK | Xu_2024 | irrelevant | 0 | 0 | The study is a mechanistic antiviral efficacy study of harmol (with aciclovir as a comparator) and does not report pharmacokinetic parameters for aciclovir. |
| popPK | Zimmerman_2004 | irrelevant | 0 | 0 | The paper studies sirolimus, and aciclovir is only mentioned as a co-administered drug with no significant effect on sirolimus exposure, providing no PK data for aciclovir. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 22:02 UTC</sub>
