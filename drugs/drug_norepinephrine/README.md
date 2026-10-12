<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01C&quot;,&quot;href&quot;:&quot;atc/C01C.md&quot;},{&quot;label&quot;:&quot;norepinephrine&quot;}]"></div>

# norepinephrine

- **generic name:** norepinephrine
- **ATC codes:** `C01CA03`
- **DrugBank:** [DB00368](https://go.drugbank.com/drugs/DB00368) · **PubChem:** [CID 439260](https://pubchem.ncbi.nlm.nih.gov/compound/439260)
- **molar mass:** 169.1778 g/mol (C8H11NO3) — DrugBank
- **groups:** approved, investigational

## About

Norepinephrine is a sympathomimetic, vasoconstricting drug used to treat neurogenic shock. It is an approved medicine, classified under cardiac therapy as an adrenergic agent, and is used mainly in hospital settings for acute cardiovascular support.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q186242](https://www.wikidata.org/wiki/Q186242) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 09:49 | 12:15 | 0/1/0 | 3/0/0 | 0/0/2 | 197,453/33,965 | ollama / qwen3.8:27b-mtp-q8_0 | 14 | 1/13 | 13/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (primary re-run, agreement 0.333). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Li_2024_reference](drugs/drug_norepinephrine/Norepinephrine_Li2024_reference.md) | — | 1-compartment (no model) | 0 | Li Y et al., Population Pharmacokinetic Modelling of…, Clinical pharmacokinetics (2024) | [10.1007/s40262-024-01430-y](https://doi.org/10.1007/s40262-024-01430-y) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span> | [Ching_1998_venous_diameter](drugs/drug_norepinephrine/pd_Ching_1998_venous_diameter.md) | venous diameter ← norepinephrine · direct sigmoid Emax (Hill) effect | — | Ching MI et al., Vasoreactivity in pre- and postmenopaus…, Journal of clinical pharmac… (1998) | [10.1002/j.1552-4604.1998.tb04404.x](https://doi.org/10.1002/j.1552-4604.1998.tb04404.x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span> | [Joachim_2024_MAP](drugs/drug_norepinephrine/pd_Joachim_2024_MAP.md) | mean arterial pressure ← norepinephrine · direct Emax (saturable) effect | — | Joachim J et al., Design of a pharmacokinetic/pharmacodyn…, British journal of clinical… (2024) | [10.1111/bcp.16180](https://doi.org/10.1111/bcp.16180) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Yoo_2015_BI](drugs/drug_norepinephrine/pd_Yoo_2015_BI.md) | Bispectral index ← norepinephrine · direct sigmoid Emax (Hill) effect | — | Yoo H et al., Mechanism-based population pharmacokine…, European journal of clinica… (2015) | [10.1007/s00228-015-1913-0](https://doi.org/10.1007/s00228-015-1913-0) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Yoo_2015_DAP](drugs/drug_norepinephrine/pd_Yoo_2015_DAP.md) | Diastolic arterial pressure ← norepinephrine · direct sigmoid Emax (Hill) effect | — | Yoo H et al., Mechanism-based population pharmacokine…, European journal of clinica… (2015) | [10.1007/s00228-015-1913-0](https://doi.org/10.1007/s00228-015-1913-0) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Yoo_2015_HR](drugs/drug_norepinephrine/pd_Yoo_2015_HR.md) | Heart rate ← norepinephrine · direct sigmoid Emax (Hill) effect | — | Yoo H et al., Mechanism-based population pharmacokine…, European journal of clinica… (2015) | [10.1007/s00228-015-1913-0](https://doi.org/10.1007/s00228-015-1913-0) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Yoo_2015_SAP](drugs/drug_norepinephrine/pd_Yoo_2015_SAP.md) | Systolic arterial pressure ← norepinephrine · direct sigmoid Emax (Hill) effect | — | Yoo H et al., Mechanism-based population pharmacokine…, European journal of clinica… (2015) | [10.1007/s00228-015-1913-0](https://doi.org/10.1007/s00228-015-1913-0) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Yoo_2015_SE_Drow](drugs/drug_norepinephrine/pd_Yoo_2015_SE_Drow.md) | Subjective effects: Drowsiness ← norepinephrine · direct sigmoid Emax (Hill) effect | — | Yoo H et al., Mechanism-based population pharmacokine…, European journal of clinica… (2015) | [10.1007/s00228-015-1913-0](https://doi.org/10.1007/s00228-015-1913-0) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Yoo_2015_SE_Drug](drugs/drug_norepinephrine/pd_Yoo_2015_SE_Drug.md) | Subjective effects: Drug effect ← norepinephrine · direct sigmoid Emax (Hill) effect | — | Yoo H et al., Mechanism-based population pharmacokine…, European journal of clinica… (2015) | [10.1007/s00228-015-1913-0](https://doi.org/10.1007/s00228-015-1913-0) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Yoo_2015_SE_Perf](drugs/drug_norepinephrine/pd_Yoo_2015_SE_Perf.md) | Subjective effects: Performance ← norepinephrine · direct sigmoid Emax (Hill) effect | — | Yoo H et al., Mechanism-based population pharmacokine…, European journal of clinica… (2015) | [10.1007/s00228-015-1913-0](https://doi.org/10.1007/s00228-015-1913-0) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | **CYP2C19** | `Q27` · CL/F | metabolism | [Tobin_2026](drugs/drug_norepinephrine/pgx_Tobin_2026_CYP2C19_Q27.md) | Tobin KV et al., Understanding Atomoxetine Exposure Vari…, Journal of clinical pharmac… (2026) | [10.1002/jcph.70168](https://doi.org/10.1002/jcph.70168) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | **CYP2D6** | `Q27` · CL/F | metabolism | [Tobin_2026](drugs/drug_norepinephrine/pgx_Tobin_2026_CYP2D6_Q27.md) | Tobin KV et al., Understanding Atomoxetine Exposure Vari…, Journal of clinical pharmac… (2026) | [10.1002/jcph.70168](https://doi.org/10.1002/jcph.70168) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 2306 matched, 77 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_18 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Joachim_2024.pdf` | Joachim J et al., Design of a pharmacokinetic/pharmacodyn…, British journal of clinical… (2024) | popPK | 10 | [10.1111/bcp.16180](https://doi.org/10.1111/bcp.16180) | [39039779](https://pubmed.ncbi.nlm.nih.gov/39039779) | The paper describes a population PK/PD model for norepinephrine in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| `Ahmed_2019.pdf` | Ahmed AT et al., Pharmacokinetic-Pharmacodynamic interac…, Journal of affective disord… (2019) | pd | 5 | [10.1016/j.jad.2018.12.021](https://doi.org/10.1016/j.jad.2018.12.021) | [30578947](https://www.ncbi.nlm.nih.gov/pubmed/30578947) | metadata signals extractable PD data (PK-PD) |
| `Huber_1998.pdf` | Huber TB et al., Catecholamines modulate podocyte functi…, Journal of the American Soc… (1998) | pd | 5 | [10.1681/ASN.V93335](https://doi.org/10.1681/ASN.V93335) | [9513895](https://www.ncbi.nlm.nih.gov/pubmed/9513895) | metadata signals extractable PD data (EC50) |
| `Bedarida_1993.pdf` | Bedarida G et al., Venodilation in Raynaud's disease, Lancet (London, England) (1993) | pd | 4 | [10.1016/0140-6736(93)92932-j](https://doi.org/10.1016/0140-6736(93)92932-j) | [7902481](https://www.ncbi.nlm.nih.gov/pubmed/7902481) | metadata signals extractable PD data (Emax) |
| `McIntyre_1996.pdf` | McIntyre RC et al., Pulmonary vascular smooth muscle contra…, The Journal of surgical res… (1996) | pd | 4 | [10.1006/jsre.1996.0100](https://doi.org/10.1006/jsre.1996.0100) | [8769962](https://www.ncbi.nlm.nih.gov/pubmed/8769962) | metadata signals extractable PD data (EC50) |
| `Alves_2026.pdf` | Alves BCM et al., Enantioselective Pharmacokinetics of Ve…, Journal of clinical pharmac… (2026) | pgx | 8 | [10.1002/jcph.70194](https://doi.org/10.1002/jcph.70194) | [42011083](https://www.ncbi.nlm.nih.gov/pubmed/42011083) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Fu_2023.pdf` | Fu D et al., Personalizing atomoxetine dosing in chi…, European journal of clinica… (2023) | pgx | 8 | [10.1007/s00228-022-03449-1](https://doi.org/10.1007/s00228-022-03449-1) | [36645468](https://www.ncbi.nlm.nih.gov/pubmed/36645468) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Grond_2004.pdf` | Grond S et al., Clinical pharmacology of tramadol, Clinical pharmacokinetics (2004) | pgx | 8 | [10.2165/00003088-200443130-00004](https://doi.org/10.2165/00003088-200443130-00004) | [15509185](https://www.ncbi.nlm.nih.gov/pubmed/15509185) | metadata signals extractable PGX data (CYP2B6, PK/PD-context) |
| `Isbister_2016.pdf` | Isbister GK et al., Zero-order metoprolol pharmacokinetics…, Clinical toxicology (Philad… (2016) | pgx | 8 | [10.1080/15563650.2016.1209768](https://doi.org/10.1080/15563650.2016.1209768) | [27442605](https://www.ncbi.nlm.nih.gov/pubmed/27442605) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Knadler_2011.pdf` | Knadler MP et al., Duloxetine: clinical pharmacokinetics a…, Clinical pharmacokinetics (2011) | pgx | 8 | [10.2165/11539240-000000000-00000](https://doi.org/10.2165/11539240-000000000-00000) | [21366359](https://www.ncbi.nlm.nih.gov/pubmed/21366359) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Lassen_2015.pdf` | Lassen D et al., The Pharmacogenetics of Tramadol, Clinical pharmacokinetics (2015) | pgx | 8 | [10.1007/s40262-015-0268-0](https://doi.org/10.1007/s40262-015-0268-0) | [25910878](https://www.ncbi.nlm.nih.gov/pubmed/25910878) | metadata signals extractable PGX data (CYP2B6, PK/PD-context) |
| `Miotto_2017.pdf` | Miotto K et al., Trends in Tramadol: Pharmacology, Metab…, Anesthesia and analgesia (2017) | pgx | 8 | [10.1213/ANE.0000000000001683](https://doi.org/10.1213/ANE.0000000000001683) | [27861439](https://www.ncbi.nlm.nih.gov/pubmed/27861439) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Nordin_1995.pdf` | Nordin C et al., Active hydroxymetabolites of antidepres…, Clinical pharmacokinetics (1995) | pgx | 8 | [10.2165/00003088-199528010-00004](https://doi.org/10.2165/00003088-199528010-00004) | [7712660](https://www.ncbi.nlm.nih.gov/pubmed/7712660) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `DeBattista_2024.pdf` | DeBattista C et al., The Black Book of Psychotropic Dosing a…, Psychopharmacology bulletin (2024) | pgx | 7 | [10.64719/pb.4493](https://doi.org/10.64719/pb.4493) | [38993656](https://www.ncbi.nlm.nih.gov/pubmed/38993656) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Fleishaker_2000.pdf` | Fleishaker JC, Clinical pharmacokinetics of reboxetine…, Clinical pharmacokinetics (2000) | pgx | 7 | [10.2165/00003088-200039060-00003](https://doi.org/10.2165/00003088-200039060-00003) | [11192474](https://www.ncbi.nlm.nih.gov/pubmed/11192474) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Schwasinger-Schmidt_2019.pdf` | Schwasinger-Schmidt TE et al., Other Antidepressants, Handbook of experimental ph… (2019) | pgx | 7 | [10.1007/164_2018_167](https://doi.org/10.1007/164_2018_167) | [30194544](https://www.ncbi.nlm.nih.gov/pubmed/30194544) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Shelton_2019.pdf` | Shelton RC, Serotonin and Norepinephrine Reuptake I…, Handbook of experimental ph… (2019) | pgx | 7 | [10.1007/164_2018_164](https://doi.org/10.1007/164_2018_164) | [30838456](https://www.ncbi.nlm.nih.gov/pubmed/30838456) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Marshe_2017.pdf` | Marshe VS et al., Norepinephrine Transporter Gene Variant…, The American journal of psy… (2017) | pgx | 5 | [10.1176/appi.ajp.2016.16050617](https://doi.org/10.1176/appi.ajp.2016.16050617) | [28068779](https://www.ncbi.nlm.nih.gov/pubmed/28068779) | metadata signals extractable PGX data (SLC6A2) |

<sub>queue written 2026-10-06T09:38:01.781426+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahmed_2019 | irrelevant | 0 | 0 | no_text gate: only 187 chars of text extracted (&lt; 400) |
| PD | Ahmed_2019 | not_relevant | 0 | 0 | The paper focuses on venlafaxine-XR and does not report pharmacodynamic or exposure-response data for norepinephrine. |
| PGx | Alves_2026 | not_relevant | 0 | 0 | The paper studies the pharmacokinetics of venlafaxine, not norepinephrine. |
| PGx | Anttila_2001 | not_relevant | 0 | 0 | The paper is a general review of mirtazapine's pharmacology and clinical profile, mentioning CYP enzymes but not reporting specific pharmacogenomic effects of gene variants on norepinephrine PK/PD parameters. |
| popPK | Bedarida_1993 | irrelevant | 0 | 0 | no_text gate: only 33 chars of text extracted (&lt; 400) |
| PD | Bedarida_1993 | not_relevant | 0 | 0 | The provided text is only a title and does not contain any data, analysis, or numeric parameters regarding norepinephrine pharmacodynamics. |
| popPK | Ber_2020 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for dexmedetomidine, not norepinephrine. |
| PGx | Ber_2020 | not_relevant | 0 | 0 | The paper reports the pharmacokinetics of dexmedetomidine, not norepinephrine. |
| PGx | Bloor_1986 | not_relevant | 0 | 0 | The study investigates the pharmacodynamic interaction between clonidine and sodium nitroprusside in dogs, with no mention of genetic variants or pharmacogenomics. |
| PGx | Bousman_2023 | not_relevant | 0 | 0 | The paper focuses on pharmacogenomics for antidepressants (SSRIs/SNRIs), not the pharmacokinetics or pharmacodynamics of norepinephrine itself. |
| PGx | Cacabelos_2017 | not_relevant | 0 | 0 | The paper discusses pharmacogenomics of Parkinson's disease drugs (like Atremorine and L-DOPA) affecting dopamine levels, but does not report pharmacogenomic effects on the PK or PD parameters of norepinephrine. |
| popPK | Ching_1998 | irrelevant | 0 | 0 | The study is a pharmacodynamic evaluation of vasoreactivity and does not report pharmacokinetic parameters (CL, V, etc.) for norepinephrine. |
| popPK | Cooper_2023 | irrelevant | 0 | 0 | The study investigates the clinical probability of serotonin toxicity following SSRI/SNRI overdose and does not report pharmacokinetic parameters for norepinephrine. |
| PGx | Costa_2019 | not_relevant | 0 | 0 | The paper reviews the pharmacokinetics and pharmacodynamics of bupropion, not norepinephrine. |
| PGx | Crisafulli_2011 | not_relevant | 2 | 1 | The paper is a general review of antidepressant pharmacogenetics and does not report specific pharmacokinetic or pharmacodynamic parameters for norepinephrine. |
| PGx | DeBattista_2024 | not_relevant | 0 | 0 | The text describes the pharmacokinetic interaction between bupropion and dextromethorphan (CYP2D6 inhibition) but does not report a pharmacogenomic effect (gene variant/genotype) on norepinephrine PK/PD parameters. |
| popPK | Doggrell_2001 | irrelevant | 0 | 0 | The paper discusses the pharmacology and pharmacokinetics of moxonidine, not norepinephrine. |
| PGx | Ellingrod_1995 | not_relevant | 0 | 0 | The paper describes the general pharmacology and clinical efficacy of nefazodone but does not report any pharmacogenomic effects (gene variants) on its PK or PD parameters. |
| PGx | Eriksson_1986 | not_relevant | 0 | 0 | The paper studies ethanol-induced motor impairment and neuronal enzyme activities, not the pharmacokinetics or pharmacodynamics of norepinephrine as a drug. |
| popPK | Erritzoe_2024 | irrelevant | 0 | 0 | The paper is a clinical trial analysis of psilocybin and escitalopram for depression and does not report pharmacokinetic parameters for norepinephrine. |
| PGx | Fleishaker_2000 | not_relevant | 0 | 0 | The paper describes the general clinical pharmacokinetics of reboxetine but does not report any pharmacogenomic effects (gene variants) on its PK or PD parameters. |
| PGx | Fu_2023 | not_relevant | 2 | 1 | The paper is a review of atomoxetine pharmacokinetics and pharmacogenomics, not a primary study reporting a specific pharmacogenomic effect on norepinephrine PK/PD parameters. |
| PGx | Gahr_2017 | not_relevant | 0 | 0 | The paper discusses opipramol, not norepinephrine, and does not report pharmacogenomic effects on norepinephrine PK/PD parameters. |
| PGx | Gilad_1993 | not_relevant | 0 | 0 | The paper studies endogenous stress hormones and monoamines in rats, not the pharmacokinetics or pharmacodynamics of exogenous norepinephrine as a drug. |
| PGx | Goetzl_2022 | not_relevant | 0 | 0 | The paper investigates the developmental regulation of placental transporters (including NET) across gestational age, not the effect of genetic variants on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Grech_2022 | irrelevant | 0 | 0 | The study investigates the effect of antidepressant medications on platelet reactivity, not the pharmacokinetics of norepinephrine. |
| popPK | Grkovski_2022 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for the radiotracer F-18 MFBG, not for the drug norepinephrine itself. |
| PGx | Grond_2004 | not_relevant | 0 | 0 | The paper discusses the clinical pharmacology of tramadol, not norepinephrine, and does not report pharmacogenomic effects on norepinephrine PK/PD parameters. |
| PGx | He_2023 | not_relevant | 0 | 0 | The paper investigates the mechanism of drug resistance in cancer cells using norepinephrine as a stressor, not the pharmacokinetics or pharmacodynamics of norepinephrine itself, and does not report any genetic variants affecting norepinephrine parameters. |
| PGx | Herat_2020 | not_relevant | 0 | 0 | The paper investigates the effect of SGLT2 inhibitors on norepinephrine levels in diabetic mice, but does not report a pharmacogenomic effect (gene variant/genotype) on the PK or PD of norepinephrine. |
| popPK | Hopkins_2016 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for dasotraline, not norepinephrine; norepinephrine is only mentioned as a target of reuptake inhibition or via its metabolite DHPG as a pharmacodynamic biomarker. |
| popPK | Huber_1998 | irrelevant | 0 | 0 | no_text gate: only 41 chars of text extracted (&lt; 400) |
| PD | Huber_1998 | not_relevant | 0 | 0 | The provided text is only a title and does not contain any data, analysis, or numeric parameters regarding a pharmacodynamic or exposure-response relationship for norepinephrine. |
| PGx | Isbister_2016 | not_relevant | 0 | 0 | The paper reports metoprolol pharmacokinetics and mentions CYP2D6 status, but does not report pharmacokinetic or pharmacodynamic parameters for norepinephrine. |
| popPK | Joachim_2024 | relevant | 10 | 0 | The paper describes a population PK/PD model for norepinephrine in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| PGx | Knadler_2011 | not_relevant | 4 | 5 | The paper discusses duloxetine (a drug) pharmacokinetics and its interaction with CYP2D6 genotype, but does not report pharmacogenomic effects on the PK/PD parameters of norepinephrine itself. |
| PGx | Krief_1989 | not_relevant | 0 | 0 | The paper studies glucose metabolism and noradrenaline content in brown adipose tissue in obese rats, not the pharmacokinetics or pharmacodynamics of exogenous norepinephrine as a drug. |
| popPK | Lassen_2015 | irrelevant | 0 | 0 | no_text gate: only 32 chars of text extracted (&lt; 400) |
| PGx | Lassen_2015 | not_relevant | 0 | 0 | The paper focuses on the pharmacogenetics of Tramadol, not norepinephrine. |
| popPK | Li_2016 | irrelevant | 0 | 0 | The study is a pharmacodynamic meta-analysis of nonhormonal drugs for menopausal hot flashes and does not report pharmacokinetic parameters for norepinephrine. |
| PD | Li_2016 | not_relevant | 0 | 0 | The paper analyzes the time-course of efficacy (Emax, ET50) for nonhormonal drugs (SSRIs, gabapentin, etc.) on hot flashes, but does not report a concentration- or dose-response relationship for norepinephrine itself. |
| PGx | Lindauer_2008 | not_relevant | 2 | 0 | The paper mentions CYP2D6 polymorphism as a cause for variability but does not report specific pharmacogenomic effect sizes or genotype-stratified PK/PD parameters. |
| PGx | MacKenzie_2020 | not_relevant | 0 | 0 | The paper investigates the metabolic profile and bioactivation of atomoxetine (a norepinephrine reuptake inhibitor) but does not report pharmacogenomic effects on the PK or PD parameters of norepinephrine itself. |
| PGx | Marette_1993 | not_relevant | 2 | 5 | The paper investigates metabolic differences between rat strains (SHR/N-cp vs LA/N-cp) regarding norepinephrine response, but it does not report a specific human gene variant/genotype effect on a pharmacokinetic or pharmacodynamic parameter of norepinephrine as a drug. |
| PGx | Marshe_2017 | not_relevant | 0 | 0 | The study reports a pharmacogenomic association with clinical response (remission/MADRS score) to venlafaxine, not a change in the pharmacokinetic or pharmacodynamic parameters of norepinephrine itself. |
| PGx | Martineau_1994 | not_relevant | 0 | 0 | The study investigates endogenous catecholamine levels and genetic associations with autism, not the pharmacokinetics or pharmacodynamics of exogenous norepinephrine administration. |
| popPK | McIntyre_1996 | irrelevant | 0 | 0 | no_text gate: only 44 chars of text extracted (&lt; 400) |
| PD | McIntyre_1996 | not_relevant | 0 | 0 | The provided text is a title fragment regarding pulmonary vascular smooth muscle contraction and contains no data, analysis, or mention of norepinephrine pharmacodynamics. |
| PGx | Miljanovic_2021 | not_relevant | 0 | 0 | The paper studies endogenous metabolite levels (including noradrenaline) in a genetic mouse model, not the pharmacokinetics or pharmacodynamics of exogenous norepinephrine administration. |
| PGx | Miotto_2017 | not_relevant | 0 | 0 | The paper discusses tramadol pharmacogenomics, not norepinephrine. |
| PGx | Poehlman_1986 | not_relevant | 0 | 0 | The study investigates the genetic influence on adipose tissue metabolic responses to overfeeding, not the pharmacokinetics or pharmacodynamics of norepinephrine as a therapeutic drug. |
| PGx | Rosenthal_2025 | not_relevant | 0 | 0 | The paper discusses VMAT2 inhibitors (e.g., tetrabenazine) and mentions CYP450 variants affecting their metabolism, but it does not report pharmacogenomic effects on the PK or PD parameters of norepinephrine itself. |
| PGx | Russell_1991 | not_relevant | 0 | 0 | The paper studies endogenous norepinephrine levels and metabolism in a rat strain, not the pharmacokinetics or pharmacodynamics of exogenous norepinephrine as a drug. |
| PGx | Schwasinger-Schmidt_2019 | not_relevant | 0 | 0 | The text is a general pharmacological overview of antidepressants and does not report any pharmacogenomic effects or gene-variant interactions on PK/PD parameters. |
| PGx | Shelton_2019 | not_relevant | 0 | 0 | The text discusses pharmacogenomic effects of CYP2D6 on the PK of venlafaxine, not norepinephrine. |
| PGx | Sindrup_1992 | not_relevant | 0 | 0 | The paper studies the clinical efficacy of mianserin in diabetic neuropathy and mentions poor metabolizer status only as a context for plasma levels, but does not report a pharmacogenomic effect on the PK or PD of norepinephrine. |
| popPK | Soufsaf_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of methylphenidate and the pharmacodynamics of dopamine/norepinephrine transporter occupancy, not the pharmacokinetic disposition parameters of norepinephrine itself. |
| PGx | Strawn_2021 | not_relevant | 0 | 0 | The paper is a general review of pediatric anxiety disorders and does not report specific pharmacogenomic effects on norepinephrine PK/PD parameters. |
| PGx | Taneyama_1989 | not_relevant | 0 | 0 | The study investigates the hemodynamic and catecholamine effects of db-cAMP and dopamine in dogs, but does not report any pharmacogenomic effects (gene variants) on the PK or PD of norepinephrine. |
| PGx | Wang_2024 | not_relevant | 0 | 0 | The paper reports that COMT genotype affects endogenous norepinephrine levels in a pain model, but does not report pharmacokinetic or pharmacodynamic parameters of norepinephrine as a drug. |
| PGx | Williams_2023 | not_relevant | 0 | 0 | The paper is a general review of ADHD and Viloxazine that discusses CYP metabolism and drug-drug interactions but does not report specific pharmacogenomic effects of gene variants on PK or PD parameters. |
| popPK | Williams_2026 | irrelevant | 0 | 0 | The paper is a systematic review of clinical trials for depression treatment and does not report pharmacokinetic parameters for norepinephrine. |
| popPK | Yoo_2015 | irrelevant | 1 | 0 | The study models the pharmacokinetics of dexmedetomidine, using norepinephrine only as a pharmacodynamic biomarker/mediator rather than the subject drug. |
| PGx | Yu_2020 | not_relevant | 0 | 0 | The paper investigates the physiological regulation of adiponectin by the sympathetic nervous system and POMC neurons, not the pharmacokinetics or pharmacodynamics of norepinephrine as a drug. |
| PGx | de_2004 | not_relevant | 0 | 0 | The paper discusses the pharmacology of MDMA, not norepinephrine, and does not report pharmacogenomic effects on norepinephrine PK/PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 09:38 UTC</sub>
