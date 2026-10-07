<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08C&quot;,&quot;href&quot;:&quot;atc/V08C.md&quot;},{&quot;label&quot;:&quot;gadopentetic acid&quot;}]"></div>

# gadopentetic acid

- **generic name:** gadopentetic acid
- **ATC codes:** `V08CA01`
- **DrugBank:** [DB00789](https://go.drugbank.com/drugs/DB00789) · **PubChem:** [CID 55466](https://pubchem.ncbi.nlm.nih.gov/compound/55466)
- **molar mass:** 547.58 g/mol (C14H20GdN3O10) — DrugBank
- **groups:** approved, investigational

## About

Gadopentetic acid is a paramagnetic contrast agent used in magnetic resonance imaging. It is an approved drug, though it has also been investigated for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27116583](https://www.wikidata.org/wiki/Q27116583) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| gadopentetic_acid | metabolite | 547.58 | C14H20GdN3O10 | DrugBank | [55466](https://pubchem.ncbi.nlm.nih.gov/compound/55466) | Steingoetter_2011 |
| Gd-DTPA (gadopentetic acid) | metabolite | 547.575 | C14H20GdN3O10 | PubChem | [6857474](https://pubchem.ncbi.nlm.nih.gov/compound/6857474) | Steingoetter_2011 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:13 | 19:27 | 0/4/0 | 3/0/0 | 0/0/0 | 503,644/67,354 | openai / gpt-6-luna | 21 | 1/14 | 21/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Daldrup_1998_reference](drugs/drug_gadopentetic_acid/GadopenteticAcid_Daldrup1998_reference.md) | — | 1-compartment (no model) | 0 | Daldrup HE et al., Quantification of the extraction fracti…, Magnetic resonance in medic… (1998) | [10.1002/mrm.1910400406](https://doi.org/10.1002/mrm.1910400406) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Jurkiewicz_2022_reference](drugs/drug_gadopentetic_acid/GadopenteticAcid_Jurkiewicz2022_reference.md) | — | 2-compartment (no model) | 3 | Jurkiewicz E et al., Pharmacokinetics, Safety, and Efficacy…, Investigative radiology (2022) | [10.1097/rli.0000000000000865](https://doi.org/10.1097/rli.0000000000000865) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Scala_2018_reference](drugs/drug_gadopentetic_acid/GadopenteticAcid_Scala2018_reference.md) | — | 2-compartment (no model) | 3 | Scala M et al., A Pharmacokinetics, Efficacy, and Safet…, Investigative radiology (2018) | [10.1097/rli.0000000000000412](https://doi.org/10.1097/rli.0000000000000412) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Steingoetter_2011_reference](drugs/drug_gadopentetic_acid/GadopenteticAcid_Steingoetter2011_reference.md) | — | 1-compartment (no model) | 6 | Steingoetter A et al., Assessing antiangiogenic therapy respon…, PloS one (2011) | [10.1371/journal.pone.0026366](https://doi.org/10.1371/journal.pone.0026366) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Akkemik_2010_6_phosphogluconate_dehydrogenase](drugs/drug_gadopentetic_acid/pd_Akkemik_2010_6_phosphogluconate_dehydrogenase.md) | erythrocyte 6-phosphogluconate dehydrogenase activity ← gadopentetic acid · inhibition effect | — | Akkemik E et al., Effects of some drugs on human erythroc…, Journal of enzyme inhibitio… (2010) | [10.3109/14756360903257900](https://doi.org/10.3109/14756360903257900) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Beydemir_2021_PON1](drugs/drug_gadopentetic_acid/pd_Beydemir_2021_PON1.md) | PON1 activity ← gadopentetic acid · inhibition effect | — | Beydemir Ş et al., Gadolinium-based contrast agents: in vi…, Drug and chemical toxicology (2021) | [10.1080/01480545.2019.1620266](https://doi.org/10.1080/01480545.2019.1620266) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Karaman_2012_GR](drugs/drug_gadopentetic_acid/pd_Karaman_2012_GR.md) | human erythrocyte glutathione reductase enzyme activity ← gadopentetic acid · inhibition effect | — | Karaman M et al., In vitro effects of some drugs on human…, Journal of enzyme inhibitio… (2012) | [10.3109/14756366.2011.572879](https://doi.org/10.3109/14756366.2011.572879) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=gadopentetic_acid) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: PGD (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 62 matched, 58 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 4  ·  extracted 0  ·  needs_review 0  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bilgen_2002.pdf` | Bilgen M et al., In vivo assessment of blood-spinal cord…, Magnetic resonance imaging (2002) | popPK | 10 | [10.1016/s0730-725x(02)00504-0](https://doi.org/10.1016/s0730-725x(02)00504-0) | [12165352](https://pubmed.ncbi.nlm.nih.gov/12165352) | A two-compartment model estimates gadopentetate transport rates, but their numeric values are not provided in the evidence. |
| `Liang_2010.pdf` | Liang J et al., Intraindividual in vivo comparison of g…, Investigative radiology (2010) | popPK | 8 | [10.1097/RLI.0b013e3181d54507](https://doi.org/10.1097/RLI.0b013e3181d54507) | [20351653](https://pubmed.ncbi.nlm.nih.gov/20351653) | Gd-DTPA was evaluated in compartmental PK models, but numeric parameter values are not provided. |
| `Notohamiprodjo_2011.pdf` | Notohamiprodjo M et al., Comparison of Gd-DTPA and Gd-BOPTA for…, Journal of magnetic resonan… (2011) | popPK | 8 | [10.1002/jmri.22640](https://doi.org/10.1002/jmri.22640) | [21761461](https://pubmed.ncbi.nlm.nih.gov/21761461) | A two-compartment model was fitted for gadopentetate, but only relative differences between agents—not absolute parameter values—are reported. |
| `Daldrup_1998.pdf` | Daldrup HE et al., Quantification of the extraction fracti…, Magnetic resonance in medic… (1998) | popPK | 7 | [10.1002/mrm.1910400406](https://doi.org/10.1002/mrm.1910400406) | [9771570](https://pubmed.ncbi.nlm.nih.gov/9771570) | A two-compartment tissue model evaluates gadopentetate transfer, and numeric extraction-fraction values are given, but numeric K(PS) values are not. |

<sub>queue written 2026-10-07T18:01:51.466609+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Akisik_2010 | irrelevant | 1 | 0 | Gadopentetate dimeglumine is used as a diagnostic contrast agent, and the reported values are tumor perfusion metrics, not drug disposition parameters. |
| popPK | Alkim_2023 | irrelevant | 0 | 0 | Magnevist is used as an MRI contrast agent, but the study reports no quantitative gadopentetic acid disposition parameters. |
| popPK | Behzadi_2018 | irrelevant | 0 | 0 | This is an imaging-signal study, not a pharmacokinetic study reporting gadopentetate disposition parameters. |
| popPK | Bell_2015 | irrelevant | 0 | 0 | This human imaging study reports pulmonary blood flow, not quantitative pharmacokinetic disposition parameters for gadopentetate acid. |
| popPK | Belova_2017 | irrelevant | 1 | 6 | Gd-DTPA is only a surrogate comparator, though simulated distribution volumes and diffusion parameters are numerically reported. |
| popPK | Bilgen_2002 | relevant | 10 | 0 | A two-compartment model estimates gadopentetate transport rates, but their numeric values are not provided in the evidence. |
| popPK | Chain_2020 | irrelevant | 0 | 0 | This study models aprepitant, not gadopentetic_acid. |
| popPK | Checkley_2003 | irrelevant | 0 | 0 | Gadopentetate is used as a diagnostic contrast agent, and the reported Ktrans changes are not its disposition parameters. |
| popPK | Cho_2009 | irrelevant | 1 | 0 | Gadopentetic acid is an imaging agent, and no numeric disposition parameters are reported. |
| popPK | Cutajar_2010 | irrelevant | 1 | 0 | Gadopentetate is used as an imaging contrast agent, and no quantitative drug disposition parameters are reported. |
| popPK | Feng_2008 | irrelevant | 1 | 0 | The numeric values are tumor angiogenic parameters for contrast agents, not gadopentetate disposition parameters. |
| popPK | Fernández-Llaneza_2025 | irrelevant | 0 | 0 | Gadopentetic acid is only listed as a drug with potential to cause AKI; no pharmacokinetic parameters are reported. |
| popPK | Gao_2026 | irrelevant | 0 | 0 | Gadopentetate was only used as an MRI contrast agent, and no pharmacokinetic parameters for the drug are reported. |
| PGx | Good_2022 | not_relevant | 0 | 0 | The paper studies bacterial gadolinium uptake from gadopentetic acid, not a gene variant’s effect on a drug pharmacokinetic or pharmacodynamic parameter. |
| popPK | Guo_2015 | irrelevant | 0 | 0 | Gadopentetic acid was used only as an MRI contrast agent; no disposition parameters for it are reported. |
| popPK | Hagiwara_2008 | irrelevant | 1 | 0 | Gadopentetate is used as a diagnostic contrast agent, and no numeric drug disposition parameters are reported. |
| popPK | Hawighorst_1996 | irrelevant | 2 | 1 | The model quantifies lesion enhancement after contrast administration, not gadopentetic acid disposition parameters. |
| popPK | Hawighorst_1997 | irrelevant | 1 | 0 | The reported values describe tumor microcirculation after diagnostic contrast-agent administration, not gadopentetic acid disposition. |
| popPK | Jurkiewicz_2022 | irrelevant | 0 | 0 | The quantitative population-PK values are for gadopiclenol, not gadopentetic acid. |
| popPK | Kang_2017 | irrelevant | 0 | 0 | This ex vivo porcine imaging comparison reports no pharmacokinetic disposition parameters for gadopentetic acid. |
| popPK | Kung_2023 | irrelevant | 0 | 0 | This review studies glibenclamide efficacy, not gadopentetic acid pharmacokinetics, and reports no gadopentetic acid PK parameters. |
| popPK | Liang_2010 | relevant | 8 | 0 | Gd-DTPA was evaluated in compartmental PK models, but numeric parameter values are not provided. |
| popPK | Mross_2009 | irrelevant | 0 | 0 | Gadopentetic acid was only an MRI contrast agent, and no pharmacokinetic parameters for it are reported. |
| popPK | Mørkenborg_1998 | irrelevant | 1 | 0 | The study reports relaxivities in pig kidney and human plasma, not quantitative pharmacokinetic disposition parameters. |
| popPK | Notohamiprodjo_2011 | relevant | 8 | 2 | A two-compartment model was fitted for gadopentetate, but only relative differences between agents—not absolute parameter values—are reported. |
| popPK | Ostrowitzki_1998 | irrelevant | 1 | 0 | Gadopentetate is used as a diagnostic contrast agent, and the model reports fBV and permeability rather than drug disposition parameters. |
| popPK | Parrot_2026 | irrelevant | 0 | 0 | This is a review of nanoparticle modeling and reports no quantitative gadopentetic_acid parameters. |
| popPK | Pires_2024 | irrelevant | 0 | 0 | The study evaluates a gadolinium-functionalized nanoparticle, not gadopentetic_acid, and reports no quantitative disposition parameters for it. |
| popPK | Scala_2018 | irrelevant | 0 | 0 | The quantitative PK values are for gadoterate meglumine, not gadopentetic acid. |
| popPK | Towbin_2021 | irrelevant | 0 | 0 | This pediatric imaging study reports brain signal changes, not pharmacokinetic disposition parameters. |
| popPK | Wang_2018 | irrelevant | 0 | 0 | The study concerns ultrasonic uncaging of propofol and reports no gadopentetic acid pharmacokinetic parameters. |
| popPK | Wang_2019 | irrelevant | 0 | 0 | The evidence gives no gadopentetic-acid-specific model or numeric disposition parameters. |
| popPK | Wang_2025 | irrelevant | 0 | 0 | The study concerns doxorubicin-loaded nanorobots, not gadopentetic acid; detailed pharmacokinetic parameters are referred to in unavailable Table S1. |
| popPK | Weis_2017 | irrelevant | 0 | 0 | This breast-cancer modeling study reports no pharmacokinetic parameters for gadopentetic acid. |
| popPK | Wu_2022 | irrelevant | 1 | 0 | Gadolinium contrast is used only as an imaging agent; reported values are tumor perfusion parameters, not its disposition parameters. |
| popPK | de_2003 | irrelevant | 2 | 0 | Gadopentetate is used as a diagnostic probe, and numeric KPS, k, and fPV values are not provided. |
| popPK | de_2004 | irrelevant | 1 | 0 | Gadopentetate dimeglumine is used only as an imaging contrast agent, and no numeric disposition parameters for it are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 18:02 UTC</sub>
