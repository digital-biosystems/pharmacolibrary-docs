<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G04B&quot;,&quot;href&quot;:&quot;atc/G04B.md&quot;},{&quot;label&quot;:&quot;dimethyl sulfoxide&quot;}]"></div>

# dimethyl sulfoxide

- **generic name:** dimethyl sulfoxide
- **ATC codes:** `G04BX13`, `M02AX03`
- **DrugBank:** [DB01093](https://go.drugbank.com/drugs/DB01093) · **PubChem:** [CID 679](https://pubchem.ncbi.nlm.nih.gov/compound/679)
- **molar mass:** 78.133 g/mol (C2H6OS) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Dimethyl sulfoxide is used topically for joint and muscle pain and for certain bladder conditions, and also serves as a solvent and cryoprotectant. It is an approved medicine and also approved for veterinary use, with some investigational applications.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q407927](https://www.wikidata.org/wiki/Q407927) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| dimethyl sulfoxide (dimethyl_sulfoxide) | parent | 78.133 | C2H6OS | DrugBank | [679](https://pubchem.ncbi.nlm.nih.gov/compound/679) | Soma_2018 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:21 | 2:52 | 0/1/1 | 0/0/0 | 0/0/0 | 167,184/6,416 | einfracz / qwen3.8-27b | 5 | 2/3 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Soma_2018_reference](drugs/drug_dimethyl_sulfoxide/DimethylSulfoxide_Soma2018_reference.md) | — | 1-compartment (no model) | 1 | Soma LR et al., Pharmacokinetics, disposition, and plas…, Journal of veterinary pharm… (2018) | [10.1111/jvp.12476](https://doi.org/10.1111/jvp.12476) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Hagedorn_1998_reference](drugs/drug_dimethyl_sulfoxide/DimethylSulfoxide_Hagedorn1998_reference.md) | — | 1-compartment (no model) | 0 | Hagedorn M et al., Characterization of a major permeabilit…, Biology of reproduction (1998) | [10.1095/biolreprod59.5.1240](https://doi.org/10.1095/biolreprod59.5.1240) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=dimethyl_sulfoxide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP2C19` inhibitor, `CYP2D6` inhibitor, `CYP3A4` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: IL5RA (downregulator), MUC16 (downregulator), MYC (downregulator), TTR (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 73 matched, 18 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hagedorn_1998.pdf` | Hagedorn M et al., Characterization of a major permeabilit…, Biology of reproduction (1998) | popPK | 5 | [10.1095/biolreprod59.5.1240](https://doi.org/10.1095/biolreprod59.5.1240) | [9780333](https://pubmed.ncbi.nlm.nih.gov/9780333) | The study reports quantitative permeability parameters (analogous to rate constants) for DMSO uptake in zebrafish using compartmental models. |

<sub>queue written 2026-10-07T09:19:32.715656+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ackermann_1998 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of 5-aminolaevulinic acid (ALA) and its metabolite protoporphyrin IX, where dimethyl sulfoxide is mentioned only as an ingredient in a gel formulation. |
| popPK | Climacosa_2020 | irrelevant | 0 | 0 | Dimethyl sulfoxide is used only as a solvent for peptide synthesis, not as the subject drug in a pharmacokinetic study. |
| popPK | Eljack_2022 | irrelevant | 0 | 0 | The paper is a review on nanotechnology for chemoresistance reversal, and dimethyl sulfoxide is mentioned only as a solvent for drug loading, not as a subject of pharmacokinetic study. |
| popPK | Hagedorn_1997 | irrelevant | 1 | 1 | The study investigates DMSO as a cryoprotectant for permeability in fish embryos, not its pharmacokinetic disposition parameters. |
| popPK | He_2004 | irrelevant | 0 | 0 | The paper studies membrane transport properties and freezing rates of oyster sperm using DMSO as a cryoprotectant, not the pharmacokinetics of dimethyl sulfoxide. |
| popPK | Kramer_2010 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of toxicants (benzo(a)pyrene, etc.) in cell assays, using DMSO only as a carrier solvent/comparator rather than as the subject drug for PK parameter estimation. |
| popPK | Kurihara-Bergstrom_1986 | irrelevant | 0 | 0 | The study focuses on the physicochemical properties of DMSO as a penetration enhancer for alkanols in vitro (diffusion cells), not on the pharmacokinetic disposition (CL, V, etc.) of DMSO itself. |
| popPK | Mamo_2024 | irrelevant | 0 | 0 | The study compares DMSO-containing and DMSO-free cryoprotectant solutions for mesenchymal stem cells and does not report any pharmacokinetic parameters for DMSO. |
| popPK | Okamura_2006 | irrelevant | 0 | 0 | The study investigates the photodegradation and toxicity of zinc and copper pyrithiones, using dimethyl sulfoxide only as a solvent for bioassays, and reports no pharmacokinetic parameters for DMSO. |
| popPK | Pham_2024 | irrelevant | 0 | 0 | The paper is a quantum chemical and in-vitro study of rutin-beta-cyclodextrin complexes, where dimethyl sulfoxide is only mentioned as a solvent in theoretical calculations, not as a subject of pharmacokinetic analysis. |
| popPK | Rosell-Valle_2021 | irrelevant | 0 | 0 | The paper describes a cryopreservation system using DMSO as a cryoprotectant, not the pharmacokinetics of DMSO. |
| popPK | Simões-Silva_2016 | irrelevant | 0 | 0 | The paper is an in vitro pharmacological study of amidines against Trypanosoma cruzi, where dimethyl sulfoxide is only mentioned as a vehicle/solvent, not as the subject of PK analysis. |
| popPK | Wise_1996 | irrelevant | 0 | 0 | DMSO is used only as a differentiating agent for cell lines, and the study measures neutrophil activation, not DMSO pharmacokinetics. |
| popPK | Zheng_2018 | irrelevant | 0 | 0 | The study is an in vitro toxicity assessment of cryoprotectants on oyster sperm motility, not a pharmacokinetic study, and does not report any PK parameters for dimethyl sulfoxide. |
| popPK | de-Carvalho_2022 | irrelevant | 0 | 0 | This is an ecotoxicology study measuring embryotoxicity and teratogenicity in snails, not a pharmacokinetic study reporting disposition parameters for dimethyl sulfoxide. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 09:19 UTC</sub>
