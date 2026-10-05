<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03A&quot;,&quot;href&quot;:&quot;atc/A03A.md&quot;},{&quot;label&quot;:&quot;mebeverine&quot;}]"></div>

# mebeverine

- **generic name:** mebeverine
- **ATC codes:** `A03AA04`
- **DrugBank:** [DB12554](https://go.drugbank.com/drugs/DB12554) · **PubChem:** [CID 4031](https://pubchem.ncbi.nlm.nih.gov/compound/4031)
- **molar mass:** 429.557 g/mol (C25H35NO5) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Mebeverine is an antispasmodic used to relieve symptoms of irritable bowel syndrome and other functional gastrointestinal disorders. It remains in use and is available in several countries, though it is not authorised centrally in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q418167](https://www.wikidata.org/wiki/Q418167) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 12:51 | 0:45 | 0/0/0 | 0/0/0 | 0/0/0 | 25,400/736 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 0/6 | 4/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=mebeverine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CHRM5 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 35 matched, 23 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hatami_2012.pdf` | Hatami M et al., Fiber-based liquid-phase micro-extracti…, Chirality (2012) | popPK | 9 | [10.1002/chir.22057](https://doi.org/10.1002/chir.22057) | [22700279](https://pubmed.ncbi.nlm.nih.gov/22700279) | The study reports stereoselective pharmacokinetic parameters (CL, Vd, t1/2) for mebeverine in rats, but the specific numeric values are not present in the provided text. |
| `Winsemius_2002.pdf` | Winsemius A et al., A pharmacokinetic comparison of the mod…, International journal of cl… (2002) | popPK | 9 | not captured | [12469979](https://pubmed.ncbi.nlm.nih.gov/12469979) | The study is a direct PK comparison of mebeverine formulations in humans, but the provided evidence contains only qualitative descriptions (lower Cmax, later tmax) without specific numeric parameter values. |
| `Dickinson_1991.pdf` | Dickinson RG et al., Facile hydrolysis of mebeverine in vitr…, Journal of pharmaceutical s… (1991) | popPK | 8 | [10.1002/jps.2600801010](https://doi.org/10.1002/jps.2600801010) | [1784004](https://pubmed.ncbi.nlm.nih.gov/1784004) | The study reports quantitative PK parameters (half-life, Cmax) for mebeverine in rats and humans, though the parent drug is largely undetectable in humans due to rapid hydrolysis. |

<sub>queue written 2026-10-04T12:51:44.919234+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdel-Raoof_2023 | irrelevant | 0 | 0 | The paper describes a potentiometric sensor for the analytical detection of mebeverine and does not report any pharmacokinetic parameters. |
| PD | Abdel-Raoof_2023 | not_relevant | 0 | 0 | The paper describes a potentiometric analytical method for quantifying mebeverine concentration, not a pharmacodynamic or exposure-response relationship. |
| PGx | Alkafaas_2024 | not_relevant | 0 | 0 | The paper discusses molecular docking of mebeverine as an inhibitor of acid sphingomyelinase in the context of SARS-CoV-2, not pharmacogenomic effects on its PK/PD parameters. |
| popPK | Chapman_1990 | irrelevant | 0 | 0 | The paper is a clinical efficacy study for irritable bowel syndrome and does not report any pharmacokinetic parameters for mebeverine. |
| PD | Chapman_1990 | not_relevant | 0 | 0 | The paper is a clinical trial comparing efficacy and acceptability of two treatment regimens; it reports no pharmacokinetic data, concentration-effect relationships, or numeric PD parameters. |
| popPK | Dandagi_2009 | irrelevant | 0 | 0 | The study focuses on formulation development and in vitro release, with in vivo efficacy measured by fecal output rather than pharmacokinetic parameters. |
| popPK | El_2017 | relevant | 8 | 4 | The study reports pharmacokinetic parameters (AUC, Cmax, tmax, relative bioavailability) for mebeverine's metabolite (veratic acid) in beagle dogs, with specific numeric values present in the text and tables. |
| PD | El_2017 | not_relevant | 0 | 0 | The paper reports pharmacokinetic parameters (Cmax, tmax, AUC) and in vitro release profiles, but contains no pharmacodynamic data, exposure-response analysis, or dose-effect relationship. |
| popPK | Goudarzi_2025 | irrelevant | 0 | 0 | The study focuses on the fabrication and in-vitro release characterization of 3D-printed tablets, reporting no in-vivo pharmacokinetic parameters (CL, V, ka, etc.) for mebeverine. |
| PD | Goudarzi_2025 | not_relevant | 0 | 0 | The paper focuses on the fabrication and in vitro release characterization of 3D-printed tablets, containing no pharmacodynamic or exposure-response data. |
| popPK | Hatami_2012 | relevant | 9 | 2 | The study reports stereoselective pharmacokinetic parameters (CL, Vd, t1/2) for mebeverine in rats, but the specific numeric values are not present in the provided text. |
| popPK | Ho_1999 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of intestinal propulsion in pig tissue, not a pharmacokinetic study reporting disposition parameters for mebeverine. |
| popPK | Illangakoon_2014 | irrelevant | 0 | 0 | The study focuses on the physicochemical characterization and in vitro dissolution of mebeverine-loaded nanofibers, reporting no in vivo pharmacokinetic parameters. |
| PD | Illangakoon_2014 | not_relevant | 0 | 0 | The paper focuses on the physicochemical characterization and in vitro dissolution of mebeverine nanofibers, containing no pharmacodynamic or exposure-response data. |
| popPK | Langrick_1989 | irrelevant | 0 | 0 | The study is a clinical efficacy trial for dysmenorrhoea and does not report any pharmacokinetic parameters for mebeverine. |
| PD | Langrick_1989 | not_relevant | 0 | 0 | The paper is a clinical efficacy trial comparing fixed doses of mebeverine and mefenamic acid without any pharmacokinetic measurements or exposure-response modeling. |
| popPK | Milusheva_2023 | irrelevant | 0 | 0 | The paper focuses on the synthesis and in vitro/ex vivo biological activity of mebeverine precursors, not the pharmacokinetics of mebeverine itself, and contains no quantitative PK parameters for the drug. |
| PD | Milusheva_2023 | not_relevant | 2 | 1 | The paper reports single-dose ex vivo bioelectric activity and qualitative immunohistochemical changes for mebeverine precursors, but does not provide a concentration-effect curve, dose-response relationship, or numeric PD parameters (e.g., EC50, Emax) for mebeverine. |
| popPK | Moskaleva_2017 | irrelevant | 2 | 0 | The paper describes an analytical method for mebeverine metabolites and mentions a PK study application, but no quantitative PK parameters (CL, V, etc.) are provided in the evidence. |
| popPK | Navidpour_2024 | irrelevant | 0 | 0 | The study investigates the photocatalytic degradation of mebeverine in water (environmental chemistry), not its pharmacokinetics in a biological system. |
| popPK | Radwan_2006 | irrelevant | 0 | 0 | The paper describes a chiral HPLC analytical method for mebeverine enantiomers and does not report any pharmacokinetic disposition parameters. |
| PD | Radwan_2006 | not_relevant | 0 | 0 | The paper describes a chiral HPLC analytical method for mebeverine enantiomers and contains no pharmacodynamic, exposure-response, or dose-response data. |
| popPK | Shrivastava_2022 | irrelevant | 0 | 0 | The paper is a review of analytical methods for otilonium bromide, and mebeverine is only mentioned as a comparator drug without any pharmacokinetic data. |
| PD | Shrivastava_2022 | not_relevant | 0 | 0 | The paper is a mini-review on analytical methods for otilonium bromide and only qualitatively mentions mebeverine as a comparator without providing any pharmacodynamic data or numeric parameters. |
| popPK | Sommers_1997 | irrelevant | 2 | 0 | The study reports that mebeverine concentrations were undetectable in plasma, so no quantitative PK parameters (CL, V, t1/2) for the parent drug are provided. |
| popPK | Vikman_2024 | irrelevant | 1 | 0 | The study is a method development paper for detecting mebeverine in hair and urine, and it does not report any quantitative pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Vikman_2024 | not_relevant | 0 | 0 | The paper describes a forensic analytical method for detecting mebeverine in hair and urine, containing no pharmacodynamic or exposure-response data. |
| popPK | Winsemius_2002 | relevant | 9 | 2 | The study is a direct PK comparison of mebeverine formulations in humans, but the provided evidence contains only qualitative descriptions (lower Cmax, later tmax) without specific numeric parameter values. |
| popPK | al_1997 | irrelevant | 0 | 0 | The study focuses on in vitro adsorption mechanisms and pharmacological effects, not pharmacokinetic disposition parameters. |
| PD | al_1997 | not_relevant | 1 | 0 | The paper focuses on in vitro adsorption isotherms and qualitative confirmation that kaolin does not significantly alter the drug's inhibitory effect on guinea pig ileum, without providing numeric PD parameters or quantitative exposure-response data. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
