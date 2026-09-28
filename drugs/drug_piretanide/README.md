<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03C&quot;,&quot;href&quot;:&quot;atc/C03C.md&quot;},{&quot;label&quot;:&quot;piretanide&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Piretanide_Trenk1987_reference&quot;,&quot;label&quot;:&quot;Trenk_1987_reference&quot;,&quot;href&quot;:&quot;drugs/drug_piretanide/Piretanide_Trenk1987_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Piretanide_Marone1984_reference&quot;,&quot;label&quot;:&quot;Marone_1984_reference&quot;,&quot;href&quot;:&quot;drugs/drug_piretanide/Piretanide_Marone1984_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# piretanide

- **generic name:** piretanide
- **ATC codes:** `C03CA03`
- **DrugBank:** [DB02925](https://go.drugbank.com/drugs/DB02925) · **PubChem:** [CID 4849](https://pubchem.ncbi.nlm.nih.gov/compound/4849)
- **molar mass:** 362.4 g/mol (C17H18N2O5S) — DrugBank
- **groups:** approved

## About

**Description.** Piretanide (INN, trade names Arelix, Eurelix, Tauliz) has been synthesized in 1973 at Hoechst AG (Germany) as a loop diuretic compound by using a then-new method for introducing cyclic amine residues in an aromatic nucleus in the presence of other aromatically bonded functional groups.

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| piretanide | parent | 362.4 | C17H18N2O5S | DrugBank | [4849](https://pubchem.ncbi.nlm.nih.gov/compound/4849) | Marone_1984, Trenk_1987 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-28 09:37 | 12:12 | 0/1/1 | 0/0/0 | 0/0/0 | 45,371/10,255 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | model structure | params | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.188). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Trenk_1987_reference](drugs/drug_piretanide/Piretanide_Trenk1987_reference.md) | 1-compartment (no model) | 5 | Trenk D et al., Pharmacokinetics and bioavailability of…, Arzneimittel-Forschung (1987) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Marone_1984_reference](drugs/drug_piretanide/Piretanide_Marone1984_reference.md) | 1-compartment (no model) | 1 | Marone C et al., Pharmacokinetics of high doses of piret…, European journal of clinica… (1984) | [10.1007/BF00556897](https://doi.org/10.1007/BF00556897) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=piretanide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: SLC12A1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 18 matched, 15 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_8 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Marone_1984.pdf` | Marone C et al., Pharmacokinetics of high doses of piret…, European journal of clinica… (1984) | popPK | 10 | [10.1007/BF00556897](https://doi.org/10.1007/BF00556897) | [6519164](https://pubmed.ncbi.nlm.nih.gov/6519164) | The study reports quantitative pharmacokinetic parameters (alpha, beta, half-lives) for piretanide in a population of patients with renal failure. |
| `Trenk_1987.pdf` | Trenk D et al., Pharmacokinetics and bioavailability of…, Arzneimittel-Forschung (1987) | popPK | 10 | not captured | [3449067](https://pubmed.ncbi.nlm.nih.gov/3449067) | The paper reports quantitative PK parameters (CL, Vss, t1/2) for piretanide in healthy volunteers with values explicitly stated in the text. |
| `Sjöström_1987.pdf` | Sjöström P et al., Pharmacokinetic-pharmacodynamic relatio…, Scandinavian journal of uro… (1987) | popPK | 9 | [10.3109/00365598709180292](https://doi.org/10.3109/00365598709180292) | [3589526](https://pubmed.ncbi.nlm.nih.gov/3589526) | The study reports quantitative PK parameters for piretanide, including bioavailability (92%) and specific renal clearance values (200 ml/min in normals), directly in the text. |
| `Marone_1989.pdf` | Marone C et al., Efficacy and pharmacokinetics of pireta…, European journal of clinica… (1989) | popPK | 8 | [10.1111/j.1365-2362.1989.tb00245.x](https://doi.org/10.1111/j.1365-2362.1989.tb00245.x) | [2506054](https://pubmed.ncbi.nlm.nih.gov/2506054) | The study reports qualitative PK findings (reduced clearance) and pharmacodynamic parameters (Emax, EC50) but lacks specific numeric values for clearance, volume, or half-life in the provided text. |
| `Cox_1988.pdf` | Cox HM et al., The effect of neuropeptide Y and peptid…, The Journal of physiology (1988) | pd | 5 | [10.1113/jphysiol.1988.sp017029](https://doi.org/10.1113/jphysiol.1988.sp017029) | [3392683](https://www.ncbi.nlm.nih.gov/pubmed/3392683) | metadata signals extractable PD data (EC50) |
| `Baird_1989.pdf` | Baird AW et al., Bradykinin stimulates electrogenic bica…, The Journal of pharmacology… (1989) | pd | 4 | not captured | [2913274](https://www.ncbi.nlm.nih.gov/pubmed/2913274) | metadata signals extractable PD data (EC50) |
| `Barthelmebs_1994.pdf` | Barthelmebs M et al., Vascular effects of loop diuretics: an…, Naunyn-Schmiedeberg's archi… (1994) | pd | 4 | [10.1007/BF00169839](https://doi.org/10.1007/BF00169839) | [8170505](https://www.ncbi.nlm.nih.gov/pubmed/8170505) | metadata signals extractable PD data (EC50) |
| `Xin_2005.pdf` | Xin HW et al., Thiopurine S-methyltransferase as a tar…, European journal of clinica… (2005) | pgx | 7 | [10.1007/s00228-005-0950-5](https://doi.org/10.1007/s00228-005-0950-5) | [15952020](https://www.ncbi.nlm.nih.gov/pubmed/15952020) | metadata signals extractable PGX data (TPMT, PK/PD-context) |

<sub>queue written 2026-09-28T09:33:15.969608+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aiton_1984 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cellular ion transport and does not report pharmacokinetic parameters for piretanide. |
| popPK | Baird_1989 | irrelevant | 0 | 0 | no_text gate: only 86 chars of text extracted (&lt; 400) |
| PD | Baird_1989 | not_relevant | 0 | 0 | The paper studies the pharmacology of bradykinin in guinea pig gallbladder, not the pharmacodynamics of piretanide. |
| popPK | Barthelmebs_1994 | irrelevant | 0 | 0 | no_text gate: only 76 chars of text extracted (&lt; 400) |
| PD | Barthelmebs_1994 | not_relevant | 0 | 0 | The paper studies the vascular effects of loop diuretics in rats but does not report specific pharmacodynamic or exposure-response data for piretanide. |
| popPK | Brayden_1988 | irrelevant | 0 | 0 | The paper is an in-vitro study on sweat gland epithelial transport where piretanide is used only as a pharmacological tool to test anion secretion, not as a subject for PK parameter estimation. |
| PD | Brayden_1988 | not_relevant | 0 | 0 | The paper mentions piretanide only to state that it did not affect SCC responses, providing no numeric dose-response or concentration-effect data for the drug. |
| popPK | Cox_1988 | irrelevant | 0 | 0 | no_text gate: only 101 chars of text extracted (&lt; 400) |
| PD | Cox_1988 | not_relevant | 0 | 0 | The paper studies neuropeptide Y and peptide YY in rat intestinal epithelia and does not mention piretanide or report any pharmacodynamic parameters for it. |
| popPK | Cox_1994 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on CGRP receptors where piretanide is used only as a pharmacological inhibitor, not as the subject of a pharmacokinetic analysis. |
| PD | Cox_1994 | not_relevant | 0 | 0 | The paper reports CGRP concentration-response data, but piretanide is only mentioned as a qualitative inhibitor at a single fixed concentration (200 microM) without any dose-response curve or numeric PD parameters for piretanide itself. |
| popPK | Eriksson_1985 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of diuretic activity on isolated fish epithelium, reporting pharmacodynamic EC50 values rather than pharmacokinetic disposition parameters. |
| popPK | Lu_1987 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding piretanide pharmacokinetics. |
| popPK | Marone_1989 | relevant | 8 | 2 | The study reports qualitative PK findings (reduced clearance) and pharmacodynamic parameters (Emax, EC50) but lacks specific numeric values for clearance, volume, or half-life in the provided text. |
| popPK | McKeen_1995 | irrelevant | 0 | 0 | The study is a pharmacological investigation of somatostatin receptors in rat colonic mucosa where piretanide is used only as a tool compound to identify ion transporters, not as the subject of a pharmacokinetic analysis. |
| PD | McKeen_1995 | not_relevant | 0 | 0 | The paper reports PD parameters (EC50) for somatostatin receptor ligands, not for piretanide, which is only mentioned as a tool to characterize the mechanism of action. |
| PGx | Xin_2005 | not_relevant | 0 | 0 | The study investigates the effect of piretanide on TPMT enzyme activity (drug interaction), not the effect of a gene variant on the PK/PD of piretanide. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-28 09:33 UTC</sub>
