<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01D&quot;,&quot;href&quot;:&quot;atc/C01D.md&quot;},{&quot;label&quot;:&quot;prenylamine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Prenylamine_Paar1990_reference&quot;,&quot;label&quot;:&quot;Paar_1990_reference&quot;,&quot;href&quot;:&quot;drugs/drug_prenylamine/Prenylamine_Paar1990_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# prenylamine

- **generic name:** prenylamine
- **ATC codes:** `C01DX02`
- **DrugBank:** [DB04825](https://go.drugbank.com/drugs/DB04825) · **PubChem:** [CID 9801](https://pubchem.ncbi.nlm.nih.gov/compound/9801)
- **molar mass:** 329.4779 g/mol (C24H27N) — DrugBank
- **groups:** approved, withdrawn

## About

**Description.** Prenylamine was withdrawn from the Canadian, US, and UK markets in 1988 due to concerns regarding cardiac arrhythmias.

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| prenylamine | parent | 329.478 | C24H27N | DrugBank | [9801](https://pubchem.ncbi.nlm.nih.gov/compound/9801) | Paar_1990 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 03:40 | 1:40 | 0/1/0 | 0/0/0 | 0/0/0 | 7,002/3,108 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.909). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Paar_1990_reference](drugs/drug_prenylamine/Prenylamine_Paar1990_reference.md) | — | 1-compartment (no model) | 5 | Paar WD et al., Pharmacokinetics of prenylamine racemat…, Arzneimittel-Forschung (1990) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=prenylamine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CALM1 (unknown), MYLK2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 35 matched, 29 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_8 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Paar_1990.pdf` | Paar WD et al., Pharmacokinetics of prenylamine racemat…, Arzneimittel-Forschung (1990) | popPK | 10 | not captured | [2397000](https://pubmed.ncbi.nlm.nih.gov/2397000) | The study reports quantitative PK parameters (half-life, clearance, residence time, bioavailability) for prenylamine in humans with values explicitly present in the text. |
| `Gietl_1990.pdf` | Gietl Y et al., Single- and multiple-dose pharmacokinet…, European journal of clinica… (1990) | popPK | 9 | [10.1007/BF00278587](https://doi.org/10.1007/BF00278587) | [2373134](https://pubmed.ncbi.nlm.nih.gov/2373134) | The study is a direct PK investigation of prenylamine in humans, but the provided evidence contains only qualitative comparisons (e.g., "five-fold") and lacks specific numeric values for clearance, volume, or half-life. |
| `Katchman_2006.pdf` | Katchman AN et al., Comparative evaluation of HERG currents…, The Journal of pharmacology… (2006) | pd | 5 | [10.1124/jpet.105.093393](https://doi.org/10.1124/jpet.105.093393) | [16278312](https://www.ncbi.nlm.nih.gov/pubmed/16278312) | metadata signals extractable PD data (IC50) |
| `Camilión_1983.pdf` | Camilión de Hurtado MC et al., Interaction between calcium and slow ch…, Naunyn-Schmiedeberg's archi… (1983) | pd | 4 | [10.1007/BF00649354](https://doi.org/10.1007/BF00649354) | [6843691](https://www.ncbi.nlm.nih.gov/pubmed/6843691) | metadata signals extractable PD data (concentration-effect) |
| `Holck_1983.pdf` | Holck M et al., Does [3H]nifedipine label the calcium c…, Journal of receptor research (1983) | pd | 4 | [10.3109/10799898309041933](https://doi.org/10.3109/10799898309041933) | [6304296](https://www.ncbi.nlm.nih.gov/pubmed/6304296) | metadata signals extractable PD data (IC50) |
| `Ichida_2000.pdf` | Ichida S et al., Characteristics of the inhibitory effec…, Neurochemical research (2000) | pd | 4 | [10.1023/a:1026674721542](https://doi.org/10.1023/a:1026674721542) | [11152392](https://www.ncbi.nlm.nih.gov/pubmed/11152392) | metadata signals extractable PD data (IC50) |
| `Itoh_1986.pdf` | Itoh H et al., The binding of the calcium channel bloc…, Biochemical pharmacology (1986) | pd | 4 | [10.1016/0006-2952(86)90516-2](https://doi.org/10.1016/0006-2952(86)90516-2) | [3484629](https://www.ncbi.nlm.nih.gov/pubmed/3484629) | metadata signals extractable PD data (IC50) |
| `Movsesian_1985.pdf` | Movsesian MA et al., Stimulation of canine cardiac sarcoplas…, Biochemical pharmacology (1985) | pd | 4 | [10.1016/0006-2952(85)90124-8](https://doi.org/10.1016/0006-2952(85)90124-8) | [3155615](https://www.ncbi.nlm.nih.gov/pubmed/3155615) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-30T03:39:08.802439+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baker_1983 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calcium channel blockers in isolated rat hearts, reporting dose-response curves for protein leakage rather than pharmacokinetic parameters for prenylamine. |
| popPK | Batra_1991 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cell proliferation and does not report pharmacokinetic parameters for prenylamine. |
| PD | Caldirola_1997 | not_relevant | 3 | 2 | The paper reports in vitro IC50 values and a single in vivo dose (0.3 mg/kg) for a related compound (VUF 8929), but does not provide a concentration-effect curve, Emax/EC50 for prenylamine, or a formal PK/PD model. |
| PD | Camilión_1983 | not_relevant | 0 | 0 | The paper discusses calcium channel blockers generally but does not report specific pharmacodynamic or exposure-response data for prenylamine. |
| popPK | Eglen_1989 | irrelevant | 0 | 0 | The paper studies the pharmacological effects of endothelin, using prenylamine only as a calcium channel antagonist to reverse contractile responses, and does not report any pharmacokinetic parameters for prenylamine. |
| popPK | Ferry_1982 | irrelevant | 0 | 0 | The paper is an in-vitro receptor binding study using prenylamine as a displacement agent, not a pharmacokinetic study reporting disposition parameters. |
| PD | Ferry_1982 | not_relevant | 0 | 0 | The paper reports receptor binding kinetics (KD, dissociation rates) and qualitative displacement profiles, but does not provide a pharmacodynamic exposure-response or dose-response relationship with numeric PD parameters (e.g., Emax, EC50) for prenylamine. |
| popPK | Gietl_1990 | relevant | 9 | 2 | The study is a direct PK investigation of prenylamine in humans, but the provided evidence contains only qualitative comparisons (e.g., "five-fold") and lacks specific numeric values for clearance, volume, or half-life. |
| PD | Grana_1978 | not_relevant | 0 | 0 | The provided text contains only the title and no body content, so no numeric PD parameters or exposure-response relationships can be extracted. |
| PD | Holck_1983 | not_relevant | 0 | 0 | The paper investigates the binding of [3H]nifedipine to calcium channels in rabbit myocardium and does not mention prenylamine or report any pharmacodynamic exposure-response or dose-response relationships. |
| PD | Ichida_2000 | not_relevant | 0 | 0 | The paper studies the inhibitory effect of calmodulin on toxin binding, not the pharmacodynamics of prenylamine. |
| PD | Itoh_1986 | not_relevant | 0 | 0 | The paper discusses the binding of bepridil to calmodulin, not prenylamine, and does not report any pharmacodynamic or exposure-response relationship for the target drug. |
| PD | Johnson_1987 | not_relevant | 0 | 0 | The paper focuses on the interaction of felodipine with calcium-binding proteins and only mentions prenylamine qualitatively as a competitor in binding assays, without reporting any pharmacodynamic or exposure-response parameters for prenylamine. |
| PD | Katchman_2006 | not_relevant | 0 | 0 | The paper evaluates HERG currents and QT intervals for various drugs but does not report specific pharmacodynamic or exposure-response parameters for prenylamine. |
| popPK | Kerr_2002 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology study characterizing prenylamine as a GABA(B) receptor modulator, reporting no pharmacokinetic parameters. |
| popPK | Mattiazzi_1983 | irrelevant | 0 | 0 | The study investigates the negative inotropic effects and antagonism of prenylamine in cat papillary muscles (pharmacodynamics/mechanism) and does not report any pharmacokinetic parameters. |
| popPK | Mills_1985 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calmodulin binding and does not report pharmacokinetic parameters for prenylamine. |
| PD | Nicolas_1994 | not_relevant | 1 | 0 | The paper reports qualitative binding displacement by prenylamine but provides no numeric PD parameters (e.g., IC50, Ki) for prenylamine itself. |
| PD | Palmer_1993 | not_relevant | 3 | 2 | The paper reports an in vitro IC50 for NMDA binding, but the study is a comparative pharmacological screening of multiple drugs in animal seizure models, not a dedicated PK/PD or exposure-response analysis for prenylamine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-27 15:39 UTC</sub>
