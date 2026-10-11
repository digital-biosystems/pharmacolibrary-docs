<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08C&quot;,&quot;href&quot;:&quot;atc/V08C.md&quot;},{&quot;label&quot;:&quot;gadoxetic acid&quot;}]"></div>

# gadoxetic acid

- **generic name:** gadoxetic acid
- **ATC codes:** `V08CA10`
- **DrugBank:** [DB08884](https://go.drugbank.com/drugs/DB08884) · **PubChem:** [CID 131704314](https://pubchem.ncbi.nlm.nih.gov/compound/131704314)
- **molar mass:** 681.75 g/mol (C23H30GdN3O11) — DrugBank
- **groups:** approved, investigational

## About

Gadoxetic acid is a gadolinium-based contrast agent used in magnetic resonance imaging, particularly for liver imaging. It is an approved injectable contrast medium used in hospitals for MRI scans.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q15322710](https://www.wikidata.org/wiki/Q15322710) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:00 | 14:10 | 0/4/0 | 2/0/0 | 0/0/0 | 333,197/45,579 | openai / gpt-6-luna | 13 | 1/12 | 13/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Karlsson_2023_reference](drugs/drug_gadoxetic_acid/GadoxeticAcid_Karlsson2023_reference.md) | — | 1-compartment (no model) | 0 | Karlsson M et al., Mathematical models for biomarker calcu…, PloS one (2023) | [10.1371/journal.pone.0279168](https://doi.org/10.1371/journal.pone.0279168) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Melillo_2023_reference](drugs/drug_gadoxetic_acid/GadoxeticAcid_Melillo2023_reference.md) | — | 1-compartment (no model) | 0 | Melillo N et al., Use of In Vivo Imaging and Physiologica…, Pharmaceutics (2023) | [10.3390/pharmaceutics15030896](https://doi.org/10.3390/pharmaceutics15030896) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Sourbron_2012_reference](drugs/drug_gadoxetic_acid/GadoxeticAcid_Sourbron2012_reference.md) | — | 1-compartment (no model) | 0 | Sourbron S et al., Combined quantification of liver perfus…, Radiology (2012) | [10.1148/radiol.12110337](https://doi.org/10.1148/radiol.12110337) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Truhn_2019_reference](drugs/drug_gadoxetic_acid/GadoxeticAcid_Truhn2019_reference.md) | — | 1-compartment (no model) | 0 | Truhn D et al., A New Model for MR Evaluation of Liver…, European radiology (2019) | [10.1007/s00330-018-5500-5](https://doi.org/10.1007/s00330-018-5500-5) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Beydemir_2021_PON1](drugs/drug_gadoxetic_acid/pd_Beydemir_2021_PON1.md) | PON1 activity ← gadoxetate disodium · inhibition effect | — | Beydemir Ş et al., Gadolinium-based contrast agents: in vi…, Drug and chemical toxicology (2021) | [10.1080/01480545.2019.1620266](https://doi.org/10.1080/01480545.2019.1620266) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Leonhardt_2010_BSP_uptake](drugs/drug_gadoxetic_acid/pd_Leonhardt_2010_BSP_uptake.md) | uptake of bromosulfophthalein (BSP) by OATP1B1 ← Gd-EOB-DTPA · inhibition effect | — | Leonhardt M et al., Hepatic uptake of the magnetic resonanc…, Drug metabolism and disposi… (2010) | [10.1124/dmd.110.032862](https://doi.org/10.1124/dmd.110.032862) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Leonhardt_2010_BSP_uptake_2](drugs/drug_gadoxetic_acid/pd_Leonhardt_2010_BSP_uptake_2.md) | uptake of bromosulfophthalein (BSP) by OATP1B3 ← Gd-EOB-DTPA · inhibition effect | — | Leonhardt M et al., Hepatic uptake of the magnetic resonanc…, Drug metabolism and disposi… (2010) | [10.1124/dmd.110.032862](https://doi.org/10.1124/dmd.110.032862) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=gadoxetic_acid) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `SLCO1B1` substrate, `SLCO1B3` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `ABCC2` substrate, `ABCC4` substrate | DrugBank actor |
| excretion | liver | `ABCC2` substrate, `ABCC3` substrate, `ABCC4` substrate | DrugBank actor |
| excretion | small intestine | `ABCC2` substrate, `ABCC3` substrate | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 55 matched, 46 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 4  ·  extracted 0  ·  needs_review 0  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Giraudeau_2017.pdf` | Giraudeau C et al., Gadoxetate-enhanced MR imaging and comp…, European radiology (2017) | popPK | 9 | [10.1007/s00330-016-4536-7](https://doi.org/10.1007/s00330-016-4536-7) | [27553933](https://pubmed.ncbi.nlm.nih.gov/27553933) | The rat study models gadoxetate transport, but the actual kinetic parameter values are not provided. |
| `Lagadec_2015.pdf` | Lagadec M et al., Advanced fibrosis: Correlation between…, Radiology (2015) | popPK | 9 | [10.1148/radiol.14140313](https://doi.org/10.1148/radiol.14140313) | [25289480](https://pubmed.ncbi.nlm.nih.gov/25289480) | Rat gadoxetate pharmacokinetic parameters were measured, but their numeric values are not reported in the evidence. |
| `Truhn_2019.pdf` | Truhn D et al., A New Model for MR Evaluation of Liver…, European radiology (2019) | popPK | 9 | [10.1007/s00330-018-5500-5](https://doi.org/10.1007/s00330-018-5500-5) | [29948090](https://pubmed.ncbi.nlm.nih.gov/29948090) | The human two-compartment model reports numeric uptake rates, but numeric excretion half-times are not provided. |
| `Simeth_2018.pdf` | Simeth J et al., Quantification of liver function by lin…, NMR in biomedicine (2018) | popPK | 8 | [10.1002/nbm.3913](https://doi.org/10.1002/nbm.3913) | [29675932](https://pubmed.ncbi.nlm.nih.gov/29675932) | Reports numeric gadoxetic acid uptake-rate estimates from a two-compartment model. |
| `Simeth_2020.pdf` | Simeth J et al., GAN and dual-input two-compartment mode…, Medical physics (2020) | popPK | 8 | [10.1002/mp.14055](https://doi.org/10.1002/mp.14055) | [31997391](https://pubmed.ncbi.nlm.nih.gov/31997391) | Models gadoxetic-acid uptake in human liver, but reports errors rather than numeric k1 parameter values. |
| `Sourbron_2012.pdf` | Sourbron S et al., Combined quantification of liver perfus…, Radiology (2012) | popPK | 8 | [10.1148/radiol.12110337](https://doi.org/10.1148/radiol.12110337) | [22623698](https://pubmed.ncbi.nlm.nih.gov/22623698) | The two-compartment uptake model reports numeric gadoxetic-acid uptake rates, though several other parameters are only described qualitatively. |

<sub>queue written 2026-10-07T18:52:23.505288+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chen_2012 | irrelevant | 1 | 0 | Gd-EOB-DTPA is used as an imaging agent to assess liver perfusion, with no drug disposition parameters reported. |
| popPK | Chen_2014 | irrelevant | 1 | 0 | Gadoxetic acid is used as an MRI contrast agent, and no quantitative disposition parameters for the drug are reported. |
| popPK | Fernández-Llaneza_2025 | irrelevant | 0 | 0 | Gadoxetic acid is only listed among drugs with possible AKI potential; no pharmacokinetic parameters are reported. |
| popPK | Forsgren_2019 | relevant | 10 | 3 | The human study fits a gadoxetate compartmental model, but only a kph cutoff is numeric here; parameter estimates appear in figures not provided. |
| popPK | Giraudeau_2017 | relevant | 9 | 0 | The rat study models gadoxetate transport, but the actual kinetic parameter values are not provided. |
| popPK | Gómez-Perales_2021 | irrelevant | 0 | 0 | no_text gate: only 59 chars of text extracted (&lt; 400) |
| popPK | Hernández_2020 | irrelevant | 1 | 0 | This is a review that mentions gadoxetate but reports no original quantitative disposition parameters for it. |
| popPK | Huh_2019 | irrelevant | 1 | 0 | This rat imaging study reports enhancement indices, not quantitative gadoxetate disposition parameters. |
| popPK | Kanematsu_2012 | irrelevant | 0 | 0 | This imaging review treats gadoxetic acid as a contrast agent and reports no quantitative disposition parameters. |
| popPK | Lagadec_2015 | relevant | 9 | 0 | Rat gadoxetate pharmacokinetic parameters were measured, but their numeric values are not reported in the evidence. |
| popPK | Leporq_2018 | irrelevant | 2 | 0 | This is a diagnostic MRI study, and the evidence gives no numeric gadoxetic acid disposition parameters. |
| PGx | Ma_2026 | not_relevant | 0 | 0 | No gene variant or genotype effect on a gadoxetic acid PK/PD parameter is reported; sequencing found no pathogenic variants in the transporter genes, and MRI findings were normal. |
| popPK | Morisaka_2021 | irrelevant | 1 | 0 | This is a human imaging study reporting lesion-retention comparisons, not quantitative gadoxetic acid disposition parameters; no numeric retention values are provided. |
| popPK | Ning_2017 | irrelevant | 2 | 1 | Gadoxetic acid is used as a diagnostic probe, and no numeric drug disposition parameter values are provided. |
| popPK | Notaro_2025 | irrelevant | 0 | 0 | This mouse immunotherapy study does not investigate gadoxetic acid or report its pharmacokinetic parameters. |
| popPK | Okada_2016 | irrelevant | 0 | 0 | This human imaging study analyzes liver enhancement timing, not gadoxetic acid disposition parameters. |
| popPK | Saito_2013 | irrelevant | 1 | 6 | Gadoxetic acid is used as a diagnostic MRI tracer; numeric tissue uptake-model values are reported, not drug disposition parameters. |
| popPK | Simeth_2020 | relevant | 8 | 1 | Models gadoxetic-acid uptake in human liver, but reports errors rather than numeric k1 parameter values. |
| popPK | Simeth_2022 | relevant | 8 | 1 | The study fits a compartmental model of gadoxetic acid uptake, but numeric uptake-rate values are not readable here. |
| PGx | Storelli_2024 | not_relevant | 0 | 0 | The paper models hepatic impairment effects on gadoxetic acid exposure, not pharmacogenomic effects; it explicitly notes genotype differences were not included. |
| popPK | Ulloa_2013 | relevant | 9 | 1 | The rat study models gadoxetate uptake and biliary excretion, but the parameter values appear to be in figures not provided. |
| popPK | Velten_2025 | irrelevant | 1 | 0 | Gadoxetate is used as a contrast agent, and the reported values are NTCP parameters rather than pharmacokinetic disposition parameters. |
| popPK | Wei_2023 | irrelevant | 1 | 0 | Gadoxetic acid is used as a diagnostic probe to measure regional liver function, not as the subject of a disposition PK model. |
| popPK | Xing_2026 | irrelevant | 0 | 0 | Gadoxetic acid is used only as an MRI contrast agent, and no pharmacokinetic parameters are reported. |
| popPK | Yamada_2018 | irrelevant | 2 | 0 | Gadoxetate is used as a diagnostic imaging agent, and no numeric gadoxetate disposition parameter values are reported in the evidence. |
| popPK | Zhu_2026 | irrelevant | 1 | 1 | The study reports imaging enhancement metrics rather than gadoxetic acid disposition parameters, and detailed ΔR1% values are in supplementary material not provided. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 18:53 UTC</sub>
