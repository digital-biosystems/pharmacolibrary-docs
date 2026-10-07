<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01C&quot;,&quot;href&quot;:&quot;atc/J01C.md&quot;},{&quot;label&quot;:&quot;carbenicillin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Carbenicillin_Strydom2024_reference&quot;,&quot;label&quot;:&quot;Strydom_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_carbenicillin/Carbenicillin_Strydom2024_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# carbenicillin

- **generic name:** carbenicillin
- **ATC codes:** `J01CA03`
- **DrugBank:** [DB00578](https://go.drugbank.com/drugs/DB00578) · **PubChem:** [CID 20824](https://pubchem.ncbi.nlm.nih.gov/compound/20824)
- **molar mass:** 378.4 g/mol (C17H18N2O6S) — DrugBank
- **groups:** approved

## About

Carbenicillin is an extended-spectrum penicillin antibiotic used to treat urinary tract infections, prostatitis, and other gram-negative bacterial infections. It is an approved antibacterial for systemic use, though it is not authorised in the European Union and is now little used, having largely been replaced by newer agents.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1050019](https://www.wikidata.org/wiki/Q1050019) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:17 | 14:39 | 1/2/0 | 2/0/0 | 0/0/0 | 746,819/25,018 | einfracz / qwen3.8-27b | 20 | 3/17 | 19/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Strydom_2024_reference](drugs/drug_carbenicillin/Carbenicillin_Strydom2024_reference.md) | ▶ model + simulator | 2-compartment, oral | 5 | Strydom N et al., Dose optimization of TBI-223 for enhanc…, Nature communications (2024) | [10.1038/s41467-024-50781-4](https://doi.org/10.1038/s41467-024-50781-4) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Fernández_2025_reference](drugs/drug_carbenicillin/Carbenicillin_Fernndez2025_reference.md) | — | 2-compartment (no model) | 3 | Fernández Rubio B et al., High-Dose Ceftriaxone in Elderly Patien…, Antibiotics (Basel, Switzer… (2025) | [10.3390/antibiotics14050508](https://doi.org/10.3390/antibiotics14050508) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Yamaoka_1979_reference](drugs/drug_carbenicillin/Carbenicillin_Yamaoka1979_reference.md) | — | 1-compartment (no model) | 0 | Yamaoka K et al., High-performance liquid chromatographic…, Journal of chromatography (1979) | [10.1016/s0021-9673(00)80708-6](https://doi.org/10.1016/s0021-9673(00)80708-6) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Kies_1975_Bleeding](drugs/drug_carbenicillin/pd_Kies_1975_Bleeding.md) | Bleeding ← Carbenicillin · model not identified | — | Kies BM et al., Carbenicillin in acute renal failure, South African medical journ… (1975) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Søgaard_1982_IC50](drugs/drug_carbenicillin/pd_S_gaard_1982_IC50.md) | IC50 ← carbenicillin · direct linear effect | — | Søgaard P, Resistance types in Enterobacter cloaca…, Acta pathologica, microbiol… (1982) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=carbenicillin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A6` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: PLA2G4A (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 122 matched, 87 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 3  ·  extracted 1  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wirth_1976.pdf` | Wirth K et al., [Kinetics of ampicillin, oxacillin and…, Arzneimittel-Forschung (1976) | popPK | 10 | not captured | [1036706](https://pubmed.ncbi.nlm.nih.gov/1036706) | The paper reports quantitative pharmacokinetic parameters (clearance, volume, half-life) for carbenicillin, but no specific numeric values are present in the provided abstract text. |
| `Bergan_1978.pdf` | Bergan T, Pharmacokinetics of mezlocillin in heal…, Antimicrobial agents and ch… (1978) | popPK | 6 | [10.1128/AAC.14.6.801](https://doi.org/10.1128/AAC.14.6.801) | [742869](https://pubmed.ncbi.nlm.nih.gov/742869) | Carbenicillin is a co-administered comparator drug to mezlocillin (the primary subject), with only half-life and AUC provided, lacking complete disposition parameters like CL and V. |
| `Tsuji_1982.pdf` | Tsuji A et al., Carbenicillin prodrugs: kinetics of int…, Journal of pharmaceutical s… (1982) | popPK | 5 | [10.1002/jps.2600710407](https://doi.org/10.1002/jps.2600710407) | [7086645](https://pubmed.ncbi.nlm.nih.gov/7086645) | The study reports intestinal absorption kinetics (absorption rates and percentages) for carbenicillin prodrugs in rats, providing quantitative data related to carbenicillin's disposition, though specific PK parameters like clearance or volume for the parent drug are not the primary focus. |
| `Yamaoka_1979.pdf` | Yamaoka K et al., High-performance liquid chromatographic…, Journal of chromatography (1979) | popPK | 5 | [10.1016/s0021-9673(00)80708-6](https://doi.org/10.1016/s0021-9673(00)80708-6) | [762230](https://pubmed.ncbi.nlm.nih.gov/762230) | The paper reports elimination rate constants and urinary excretion fractions for carbenicillin in humans via a one-compartment model, but does not explicitly list total clearance (CL) or volume of distribution (V) values. |

<sub>queue written 2026-10-07T11:10:47.291562+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Anderson_2025 | irrelevant | 0 | 0 | The paper is a computational modeling study on bacterial evolution and collateral sensitivity, explicitly stating it does not incorporate pharmacokinetics or pharmacodynamics for the drugs involved, including carbenicillin which is used only as a data point in the antibiotic panel. |
| popPK | Bergan_1978 | relevant | 6 | 3 | Carbenicillin is a co-administered comparator drug to mezlocillin (the primary subject), with only half-life and AUC provided, lacking complete disposition parameters like CL and V. |
| popPK | Bulitta_2010 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of piperacillin, not carbenicillin. |
| popPK | Börnsen_2026 | irrelevant | 0 | 0 | The paper describes the molecular mechanism of a bacterial antibiotic efflux pump inhibitor and does not report any pharmacokinetic parameters for carbenicillin. |
| popPK | English_1976 | relevant | 8 | 1 | The paper reports a two-compartment PK model for carbenicillin in mice, but the specific numeric values in Tables 2, 3, 4, and 6 are not present in the provided text evidence. |
| popPK | European_2022 | irrelevant | 0 | 0 | The paper is a surveillance report on antimicrobial resistance in bacteria, not a pharmacokinetic study of carbenicillin. |
| popPK | Fernández_2025 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of ceftriaxone, not carbenicillin. |
| popPK | Fleckenstein_2026 | irrelevant | 0 | 0 | The study focuses on antibiotic biosensors for trimethoprim and tetracycline in bacteria and is unrelated to carbenicillin pharmacokinetics. |
| popPK | Giuliano_2024 | irrelevant | 0 | 0 | The paper is a CRISPR-based functional genomics study of Toxoplasma gondii in mice and contains no pharmacokinetic data or mention of carbenicillin. |
| PGx | Hulen_2022 | not_relevant | 0 | 0 | The study investigates the interaction of chemical inhibitors with bacterial ABC transporters, not human gene variants affecting pharmacokinetics or pharmacodynamics. |
| popPK | Landersdorfer_2008 | irrelevant | 0 | 0 | The study investigates the pharmacokinetic interaction between piperacillin and flucloxacillin, not carbenicillin. |
| popPK | Landersdorfer_2012 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of piperacillin, not carbenicillin. |
| popPK | Luttens_2022 | irrelevant | 0 | 0 | The paper is a structure-based drug discovery study for SARS-CoV-2 main protease inhibitors and contains no pharmacokinetic data for carbenicillin. |
| popPK | Ma_2024 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic and mathematical modeling study on antibiotic selection dynamics in bacteria, not a pharmacokinetic study of carbenicillin. |
| popPK | Meyer_2021 | irrelevant | 0 | 0 | The paper is an in vitro microbiology study investigating calcium dynamics in E. coli in response to kanamycin and Polymyxin B; carbenicillin is used only as a plasmid maintenance antibiotic and not as the subject drug for PK analysis. |
| popPK | Notaro_2025 | irrelevant | 0 | 0 | The paper is an immunology study on liver metastasis gene therapy in mice and does not involve carbenicillin or pharmacokinetics. |
| popPK | Permin_1983 | irrelevant | 0 | 0 | The study compares ceftazidime to a regimen containing carbenicillin, but only reports pharmacokinetic parameters for ceftazidime, not for carbenicillin. |
| popPK | Pruimboom-Brees_2023 | irrelevant | 0 | 0 | The paper is a general review of intravitreal drug development and does not study carbenicillin or report any specific PK parameters for it. |
| popPK | Randall_2022 | irrelevant | 0 | 0 | The paper studies a synthetic peptide antibiotic (Symbah-1) and uses carbenicillin only as a negative control in an in-vitro membrane permeability assay, providing no pharmacokinetic parameters for carbenicillin. |
| popPK | Smith_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of meropenem on bacterial species, not the pharmacokinetics of carbenicillin. |
| popPK | Tsuji_1982 | relevant | 5 | 4 | The study reports intestinal absorption kinetics (absorption rates and percentages) for carbenicillin prodrugs in rats, providing quantitative data related to carbenicillin's disposition, though specific PK parameters like clearance or volume for the parent drug are not the primary focus. |
| PGx | Tymoszewska_2021 | not_relevant | 0 | 0 | The study investigates bacterial antibiotic resistance mechanisms (mutations in bacterial genes), which is distinct from human pharmacogenomics affecting drug pharmacokinetics or pharmacodynamics. |
| popPK | Wirth_1976 | relevant | 10 | 0 | The paper reports quantitative pharmacokinetic parameters (clearance, volume, half-life) for carbenicillin, but no specific numeric values are present in the provided abstract text. |
| popPK | Zhu_1991 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for the subject drug ribostamycin, while carbenicillin acts only as a co-administered agent to test for interaction, with no quantitative PK parameters provided for carbenicillin itself. |
| popPK | Zimmermann_2019 | irrelevant | 0 | 0 | The study investigates brivudine and clonazepam pharmacokinetics in mice, not carbenicillin. |
| popPK | Zinner_1986 | irrelevant | 1 | 0 | The study is an in-vitro mechanistic/pharmacodynamic model for amikacin and azlocillin; carbenicillin is only mentioned as a comparator in clinical trials, and no quantitative PK parameters for carbenicillin are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 11:10 UTC</sub>
