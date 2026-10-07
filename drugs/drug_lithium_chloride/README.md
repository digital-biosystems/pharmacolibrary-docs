<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V04C&quot;,&quot;href&quot;:&quot;atc/V04C.md&quot;},{&quot;label&quot;:&quot;lithium chloride&quot;}]"></div>

# lithium chloride

- **generic name:** lithium chloride
- **ATC codes:** `V04CX11`
- **DrugBank:** [DB16607](https://go.drugbank.com/drugs/DB16607) · **PubChem:** not captured
- **molar mass:** 42.39 g/mol (ClLi) — DrugBank
- **groups:** investigational

## About

Lithium chloride is a chemical compound with roles described as an antimanic agent and an immunologic adjuvant, and it is classified as a diagnostic agent. It is considered investigational and has no authorised marketing status listed in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q422930](https://www.wikidata.org/wiki/Q422930) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| lithium_chloride | metabolite | 42.39 | ClLi | DrugBank | — | Hatfield_2001, Martin_2018, Rosenthal_1986 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:47 | 5:02 | 0/2/1 | 1/1/0 | 0/0/0 | 81,735/4,128 | ollama / glm-5.3-flash | 5 | 2/3 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Rosenthal_1986_reference](drugs/drug_lithium_chloride/LithiumChloride_Rosenthal1986_reference.md) | — | 1-compartment (no model) | 3 | Rosenthal RC et al., Pharmacokinetics of lithium in the dog, Journal of veterinary pharm… (1986) | [10.1111/j.1365-2885.1986.tb00015.x](https://doi.org/10.1111/j.1365-2885.1986.tb00015.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Hatfield_2001_reference](drugs/drug_lithium_chloride/LithiumChloride_Hatfield2001_reference.md) | — | 1-compartment (no model) | 2 | Hatfield CL et al., Pharmacokinetics and toxic effects of l…, American journal of veterin… (2001) | [10.2460/ajvr.2001.62.1387](https://doi.org/10.2460/ajvr.2001.62.1387) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Martin_2018_reference](drugs/drug_lithium_chloride/LithiumChloride_Martin2018_reference.md) | — | 1-compartment (no model) | 6 | Martin LM et al., Pharmacokinetics of intravenous lithium…, Equine veterinary journal (2018) | [10.1111/evj.12778](https://doi.org/10.1111/evj.12778) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Repetto_2001_cell_proliferation_total_protein_content](drugs/drug_lithium_chloride/pd_Repetto_2001_cell_proliferation_total_protein_content.md) | cell proliferation (total protein content) ← lithium chloride · stimulation effect | — | Repetto G et al., In vitro effects of lithium and nickel…, Toxicology in vitro : an in… (2001) | [10.1016/s0887-2333(01)00037-6](https://doi.org/10.1016/s0887-2333(01)00037-6) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Peters_2008_Inhibition_of_D3_embryonic_stem_cell_differentiation_into_cardiomyocytes](drugs/drug_lithium_chloride/pd_Peters_2008_Inhibition_of_D3_embryonic_stem_cell_differentia.md) | Inhibition of D3 embryonic stem cell differentiation into cardiomyocytes ← lithium chloride · inhibition effect | — | Peters AK et al., Evaluation of the embryotoxic potency o…, Toxicological sciences : an… (2008) | [10.1093/toxsci/kfn126](https://doi.org/10.1093/toxsci/kfn126) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=lithium_chloride) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: GSK3A (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 29 matched, 27 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Martin_2018.pdf` | Martin LM et al., Pharmacokinetics of intravenous lithium…, Equine veterinary journal (2018) | popPK | 10 | [10.1111/evj.12778](https://doi.org/10.1111/evj.12778) | [29112289](https://pubmed.ncbi.nlm.nih.gov/29112289) | Original PK study of i.v. LiCl in horses with numeric NCA parameters (CL, Vss, t½) reported directly in the abstract. |
| `Rosenthal_1986.pdf` | Rosenthal RC et al., Pharmacokinetics of lithium in the dog, Journal of veterinary pharm… (1986) | popPK | 10 | [10.1111/j.1365-2885.1986.tb00015.x](https://doi.org/10.1111/j.1365-2885.1986.tb00015.x) | [3009841](https://pubmed.ncbi.nlm.nih.gov/3009841) | Original PK study in dogs with two-compartment model reporting t1/2, V'c, and bioavailability numerically in the abstract; CL not explicitly given. |
| `Hatfield_2001.pdf` | Hatfield CL et al., Pharmacokinetics and toxic effects of l…, American journal of veterin… (2001) | popPK | 8 | [10.2460/ajvr.2001.62.1387](https://doi.org/10.2460/ajvr.2001.62.1387) | [11560265](https://pubmed.ncbi.nlm.nih.gov/11560265) | PK study of LiCl in horses with compartmental model and half-life reported, but CL/V values are not explicitly given in the evidence. |

<sub>queue written 2026-10-07T22:46:13.658794+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bolognini_2013 | irrelevant | 0 | 0 | Lithium chloride is only used as an emetic/nausea-inducing agent in a pharmacology study of CBDA, with no PK parameters for lithium reported. |
| popPK | Burgdorf_2001 | irrelevant | 0 | 0 | Behavioral study of conditioned aversion in rats; no PK parameters for lithium chloride reported. |
| popPK | Frisch_1995 | irrelevant | 0 | 0 | LiCl is used only as an aversion-inducing agent in a behavioral test; no PK parameters are reported. |
| popPK | Luconi_2001 | irrelevant | 0 | 0 | Lithium chloride is only a co-incubation agent in an in-vitro sperm motility assay; no PK parameters for lithium are reported. |
| popPK | López-Meraz_2014 | irrelevant | 0 | 0 | Lithium chloride is only a convulsant/procedure agent in a rat pup behavioral study; no PK parameters reported. |
| popPK | Morrisett_1987 | irrelevant | 1 | 1 | This is a pharmacodynamic seizure study in rats; lithium is a pretreatment, not a PK subject, and no disposition parameters (CL, V, half-life) are reported. |
| popPK | Nonaka_1998 | irrelevant | 0 | 0 | In-vitro mechanistic neuroprotection study with no PK disposition parameters for lithium. |
| popPK | Osborne_1993 | irrelevant | 0 | 0 | Lithium chloride is only used as an in vitro tool (5 mM) in cell signaling experiments; no PK parameters for lithium are reported. |
| PGx | Paha_2026 | not_relevant | 1 | 2 | LiCl is used as an experimental tool in cell models of WDFY3 variants; no pharmacokinetic or pharmacodynamic parameter of lithium is reported as altered by genotype. |
| popPK | Peters_2008 | irrelevant | 0 | 0 | In-vitro embryotoxicity assay with EC50/REP values, no pharmacokinetic disposition parameters for lithium chloride. |
| popPK | Pillai_2003 | irrelevant | 0 | 0 | Lithium chloride is only used as a classical comparator agent for inducing exogastrulation; no PK parameters are reported. |
| PGx | Pisanu_2018 | not_relevant | 3 | 4 | Reports gene associations with clinical lithium response (efficacy), not effects on PK or PD parameters. |
| popPK | Repetto_2001 | irrelevant | 0 | 0 | In-vitro cytotoxicity study in neuroblastoma cells with no pharmacokinetic disposition parameters for lithium chloride. |
| popPK | Sandmann_1991 | irrelevant | 0 | 0 | Lithium chloride is only a co-incubation reagent in an in vitro cell signaling study; no PK parameters for lithium. |
| PGx | Shawahna_2017 | not_relevant | 2 | 3 | Study reports lithium-induced gene expression changes in cell culture, not a gene variant/genotype effect on lithium PK/PD parameters. |
| PGx | Silva_2010 | not_relevant | 0 | 0 | In vitro study of LiCl as Wnt activator in retinoblastoma cell lines; no gene variant/genotype/phenotype effects on lithium PK or PD parameters. |
| PGx | Wang_2025 | not_relevant | 3 | 5 | ApoE4 genotype modifies lithium's cytoprotective (PD) effect on cell viability, but no PK/PD parameters (e.g., EC50, Emax) are modeled or quantified as fitted effect sizes. |
| PGx | Wang_2026 | not_relevant | 2 | 3 | ApoE4 genotype modulates lithium's cytoprotective (PD) effect in vitro, but no PK/PD parameter (e.g., EC50, AUC) is quantified as a genotype-dependent fitted effect. |
| popPK | Yanagita_2009 | irrelevant | 0 | 0 | In-vitro mechanistic study of LiCl effects on sodium channels in bovine chromaffin cells; no PK disposition parameters reported. |
| PGx | Zhang_2025 | not_relevant | 0 | 0 | Lithium chloride is only used to induce the epilepsy model; the studied drug is phenytoin, and effects are environmental (hypoxia), not gene-variant effects on lithium PK/PD. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 22:46 UTC</sub>
